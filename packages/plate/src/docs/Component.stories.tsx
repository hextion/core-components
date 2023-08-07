import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { CheckmarkOnCircleMIcon } from '@alfalab/icons-glyph/CheckmarkOnCircleMIcon';
import { ExclamationCircleMIcon } from '@alfalab/icons-glyph/ExclamationCircleMIcon';
import { DiamondsMIcon } from '@alfalab/icons-glyph/DiamondsMIcon';
import { Plate } from '@alfalab/core-components-plate';
import { PlateMobile } from '@alfalab/core-components-plate/mobile';
import { PlateDesktop } from '@alfalab/core-components-plate/desktop';

import { Button } from '@alfalab/core-components-button';
import { Badge } from '@alfalab/core-components-badge';

import {
    stylesStringToObj,
    getQueryParam,
} from '../../../screenshot-utils/screenshots-story/utils';

const meta: Meta<typeof Plate> = {
    title: 'Components/Plate',
    component: Plate,
    id: 'Plate',
};

type Story = StoryObj<typeof Plate>;

export const plate: Story = {
    name: 'Plate',
    render: () => {
        const VIEWS_MAP = {
            common: {
                addon: (
                    <Badge view='icon' iconColor='secondary' content={<ExclamationCircleMIcon />} />
                ),
            },
            negative: {
                addon: (
                    <Badge view='icon' iconColor='negative' content={<ExclamationCircleMIcon />} />
                ),
            },
            positive: {
                addon: (
                    <Badge view='icon' iconColor='positive' content={<CheckmarkOnCircleMIcon />} />
                ),
            },
            attention: {
                addon: (
                    <Badge view='icon' iconColor='attention' content={<ExclamationCircleMIcon />} />
                ),
            },
            custom: { addon: <DiamondsMIcon fill='#CF70FF' /> },
        };
        const view = select('view', Object.keys(VIEWS_MAP), 'positive');
        const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));
        return (
            <div
                style={{
                    background: 'transparent',
                    ...previewStyles,
                }}
            >
                <style>
                    {`.custom {
                        background: rgba(207, 112, 255, 0.1);
                        box-shadow: var(--plate-border) rgba(207, 112, 255, 1);
                    `}
                </style>
                <Plate
                    className={view === 'custom' ? 'custom' : undefined}
                    view={view}
                    title={text('title', 'Поздравляем, полный успех')}
                    foldable={boolean('foldable', false)}
                    hasCloser={boolean('hasCloser', false)}
                    rounded={boolean('rounded', true)}
                    border={boolean('border', view !== 'custom')}
                    shadow={boolean('shadow', false)}
                    limitContentWidth={boolean('limitContentWidth', true)}
                    titleView={select('titleView', ['bold', 'light'], 'bold')}
                    leftAddons={boolean('leftAddons', true) ? VIEWS_MAP[view].addon : null}
                    buttons={
                        boolean('buttons', false)
                            ? [<Button view='primary'>Кнопка</Button>, <Button>Кнопка</Button>]
                            : null
                    }
                    subAddons={
                        boolean('subAddons', false)
                            ? [
                                  <Button view='link' size='xxs'>
                                      Кнопка
                                  </Button>,
                                  <Button view='secondary' size='xxs'>
                                      Кнопка
                                  </Button>,
                              ]
                            : null
                    }
                    row
                    rowLimit={select('rowLimit', [undefined, 1, 2, 3], 3)}
                >
                    {text('children', 'Вам одобрено. Согласитесь на предложение')}
                </Plate>
            </div>
        );
    },
};

export const plate_mobile: Story = {
    name: 'PlateMobile',
    render: () => {
        const VIEWS_MAP = {
            common: {
                addon: (
                    <Badge view='icon' iconColor='secondary' content={<ExclamationCircleMIcon />} />
                ),
            },
            negative: {
                addon: (
                    <Badge view='icon' iconColor='negative' content={<ExclamationCircleMIcon />} />
                ),
            },
            positive: {
                addon: (
                    <Badge view='icon' iconColor='positive' content={<CheckmarkOnCircleMIcon />} />
                ),
            },
            attention: {
                addon: (
                    <Badge view='icon' iconColor='attention' content={<ExclamationCircleMIcon />} />
                ),
            },
            custom: { addon: <DiamondsMIcon fill='#CF70FF' /> },
        };
        const view = select('view', Object.keys(VIEWS_MAP), 'positive');
        const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));
        return (
            <div
                style={{
                    background: 'transparent',
                    ...previewStyles,
                }}
            >
                <style>
                    {`.custom {
                        background: rgba(207, 112, 255, 0.1);
                        box-shadow: var(--plate-border) rgba(207, 112, 255, 1);
                    `}
                </style>
                <PlateMobile
                    className={view === 'custom' ? 'custom' : undefined}
                    view={view}
                    title={text('title', 'Поздравляем, полный успех')}
                    foldable={boolean('foldable', false)}
                    hasCloser={boolean('hasCloser', false)}
                    rounded={boolean('rounded', true)}
                    border={boolean('border', view !== 'custom')}
                    shadow={boolean('shadow', false)}
                    titleView={select('titleView', ['bold', 'light'], 'bold')}
                    leftAddons={boolean('leftAddons', true) ? VIEWS_MAP[view].addon : null}
                    buttons={
                        boolean('buttons', false)
                            ? [<Button view='primary'>Кнопка</Button>, <Button>Кнопка</Button>]
                            : null
                    }
                    subAddons={
                        boolean('subAddons', false)
                            ? [
                                  <Button view='link' size='xxs'>
                                      Кнопка
                                  </Button>,
                                  <Button view='secondary' size='xxs'>
                                      Кнопка
                                  </Button>,
                              ]
                            : null
                    }
                    row
                    rowLimit={select('rowLimit', [undefined, 1, 2, 3], 3)}
                >
                    {text('children', 'Вам одобрено. Согласитесь на предложение')}
                </PlateMobile>
            </div>
        );
    },
};

export const plate_desktop: Story = {
    name: 'PlateDesktop',
    render: () => {
        const VIEWS_MAP = {
            common: {
                addon: (
                    <Badge view='icon' iconColor='secondary' content={<ExclamationCircleMIcon />} />
                ),
            },
            negative: {
                addon: (
                    <Badge view='icon' iconColor='negative' content={<ExclamationCircleMIcon />} />
                ),
            },
            positive: {
                addon: (
                    <Badge view='icon' iconColor='positive' content={<CheckmarkOnCircleMIcon />} />
                ),
            },
            attention: {
                addon: (
                    <Badge view='icon' iconColor='attention' content={<ExclamationCircleMIcon />} />
                ),
            },
            custom: { addon: <DiamondsMIcon fill='#CF70FF' /> },
        };
        const view = select('view', Object.keys(VIEWS_MAP), 'positive');
        const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));
        return (
            <div
                style={{
                    background: 'transparent',
                    ...previewStyles,
                }}
            >
                <style>
                    {`.custom {
                        background: rgba(207, 112, 255, 0.1);
                        box-shadow: var(--plate-border) rgba(207, 112, 255, 1);
                    `}
                </style>
                <PlateDesktop
                    className={view === 'custom' ? 'custom' : undefined}
                    view={view}
                    title={text('title', 'Поздравляем, полный успех')}
                    foldable={boolean('foldable', false)}
                    hasCloser={boolean('hasCloser', false)}
                    rounded={boolean('rounded', true)}
                    border={boolean('border', view !== 'custom')}
                    shadow={boolean('shadow', false)}
                    limitContentWidth={boolean('limitContentWidth', true)}
                    titleView={select('titleView', ['bold', 'light'], 'bold')}
                    leftAddons={boolean('leftAddons', true) ? VIEWS_MAP[view].addon : null}
                    buttons={
                        boolean('buttons', false)
                            ? [<Button view='primary'>Кнопка</Button>, <Button>Кнопка</Button>]
                            : null
                    }
                    subAddons={
                        boolean('subAddons', false)
                            ? [
                                  <Button view='link' size='xxs'>
                                      Кнопка
                                  </Button>,
                                  <Button view='secondary' size='xxs'>
                                      Кнопка
                                  </Button>,
                              ]
                            : null
                    }
                    row
                    rowLimit={select('rowLimit', [undefined, 1, 2, 3], 3)}
                >
                    {text('children', 'Вам одобрено. Согласитесь на предложение')}
                </PlateDesktop>
            </div>
        );
    },
};

export default meta;
