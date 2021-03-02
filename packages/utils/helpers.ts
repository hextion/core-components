/* eslint-disable */
import {
    Browser,
    Page,
    BrowserContext,
    BrowserType,
    FirefoxBrowser,
    WebKitBrowser,
    ChromiumBrowser,
    chromium,
} from 'playwright';
import axios from 'axios';
import { MatchImageSnapshotOptions } from 'jest-image-snapshot';
import kebab from 'lodash.kebabcase';
import { STYLES_URL, ScreenshotOpts, EvaluateFn } from './screenshot-testing';

type CustomSnapshotIdentifierParams = {
    currentTestName: string;
    counter: number;
    defaultIdentifier: string;
    testPath: string;
};

type CloseBrowserParams = {
    page: Page;
    context: BrowserContext;
    browser: Browser;
};

const CI = process.env.CI === 'true';

const serverHost = CI ? 'https://digital.alfabank.ru' : 'http://digital';
const playwrightUrl = `${serverHost}/playwright`;

/**
 * Удаляем из названия теста лишнюю информацию, чтобы имя файла было короче
 */
export const customSnapshotIdentifier = ({
    currentTestName,
    counter,
}: CustomSnapshotIdentifierParams) => {
    const [knobsStrObj] = /(\{.{1,}\})/.exec(currentTestName) || [];

    if (!knobsStrObj) {
        return kebab(`${currentTestName}-${counter}`);
    }

    return kebab(`${knobsStrObj}-${counter}`);
};

const getPageHtml = async (page: Page, css?: string) => {
    const [head, body] = await Promise.all([page?.innerHTML('head'), page?.innerHTML('body')]);

    return `<html><head>${head}</head><body><style>${css}</style>${body}</body></html>`;
};

type MatchHtmlParams = {
    page: Page;
    css?: string;
    expect: any;
    matchImageSnapshotOptions?: MatchImageSnapshotOptions;
    screenshotOpts?: ScreenshotOpts;
    evaluate?: EvaluateFn;
};

const screenshotDefaultOpts = {
    clip: {
        x: 0,
        y: 0,
        width: 1920,
        height: 500,
    },
    fullPage: false,
    omitBackground: false,
};

export const matchHtml = async ({
    page,
    css,
    expect,
    matchImageSnapshotOptions,
    screenshotOpts = screenshotDefaultOpts,
    evaluate,
}: MatchHtmlParams) => {
    const pageHtml = await getPageHtml(page, css);

    const image = await axios.post(
        playwrightUrl,
        {
            data: pageHtml,
            screenshotOpts,
            evaluate: evaluate && evaluate.toString(),
        },
        {
            responseType: 'arraybuffer',
            headers: {
                accept: 'application/json',
            },
            auth: CI
                ? {
                      username: process.env.CI_USER_NAME as string,
                      password: process.env.CI_USER_PASSWORD as string,
                  }
                : undefined,
        },
    );

    expect(image.data).toMatchImageSnapshot({
        customSnapshotIdentifier,
        ...matchImageSnapshotOptions,
    });
};

export const openBrowserPage = async (
    pageUrl: string,
    browserType: BrowserType<ChromiumBrowser | FirefoxBrowser | WebKitBrowser> = chromium,
) => {
    const browser = await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const [css] = await Promise.all([
        axios.get(STYLES_URL, {
            responseType: 'text',
        }),
        page.goto(pageUrl),
    ]);

    return { browser, context, page, css: css?.data };
};

export const closeBrowser = async ({ page, context, browser }: CloseBrowserParams) => {
    await page.close();
    await context.close();
    await browser.close();
};
