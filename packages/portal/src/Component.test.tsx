import React from 'react';
import { render, screen } from '@testing-library/react';

import { Portal } from './index';
import { PORTAL_CONTAINER_ATTRIBUTE } from './utils';
import { PortalContext } from '@balafla/core-components-shared';

describe('Portal tests', () => {
    it('should render in a different node', () => {
        const normalText = 'Normal text';
        const textInPortal = 'Text in portal';

        const { container, getByText } = render(
            <div>
                <span>{normalText}</span>
                <Portal>
                    <span>{textInPortal}</span>
                </Portal>
            </div>,
        );

        const rootElement = container.firstElementChild;

        expect(rootElement).toContainElement(getByText(normalText));
        expect(rootElement).not.toContainElement(getByText(textInPortal));
    });

    it('should render overlay into document', () => {
        const textInPortal = 'Text in portal';

        const { getByText } = render(
            <div>
                <h1>Title</h1>
                <Portal>
                    <span>{textInPortal}</span>
                </Portal>
            </div>,
        );

        const portalChild = getByText(textInPortal);

        expect(document.querySelector(`div[${PORTAL_CONTAINER_ATTRIBUTE}]`)).toContainElement(
            portalChild,
        );
    });

    it('should render overlay into container (DOMNode)', () => {
        const textInPortal = 'Text in portal';

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const getPortalContainer = () => document.querySelector('#portal-container')!;

        const { getByText } = render(
            <div>
                <h1>Title</h1>
                <div id='portal-container' />
                <Portal getPortalContainer={getPortalContainer}>
                    <span>{textInPortal}</span>
                </Portal>
            </div>,
        );

        const portalChild = getByText(textInPortal);

        expect(document.querySelector('#portal-container')).toContainElement(portalChild);
    });

    it('render to element based on portal context', () => {
        const textContent = 'Text content';
        const getPortalContainer = () => document.querySelector('#portal-container');

        render(
            <>
                <div data-test-id='portal-container' id='portal-container'></div>
                <PortalContext.Provider value={getPortalContainer}>
                    <Portal>
                        <span>{textContent}</span>
                    </Portal>
                </PortalContext.Provider>
            </>,
        );

        const portalChild = screen.queryByText(textContent);
        expect(screen.queryByTestId('portal-container')).toContainElement(portalChild);
    });
});
