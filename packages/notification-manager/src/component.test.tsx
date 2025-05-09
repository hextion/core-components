import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Notification } from '@balafla/core-components-notification';

import { NotificationManager, NotificationManagerProps } from '.';

jest.mock('react-transition-group', () => {
    return {
        CSSTransition: jest.fn((props) => props.children),
        TransitionGroup: jest.fn((props) => props.children),
    };
});

jest.useFakeTimers();

describe('NotificationManager', () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: true,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });

    describe('Snapshots tests', () => {
        it('should match empty snapshot', () => {
            const { baseElement } = render(
                <NotificationManager onRemoveNotification={jest.fn()} notifications={[]} />,
            );

            expect(baseElement).toMatchSnapshot();
        });

        it('should match snapshot', () => {
            const { baseElement } = render(
                <NotificationManager
                    onRemoveNotification={jest.fn()}
                    notifications={[
                        <Notification title='title' key={1} id='1' />,
                        <Notification title='title' key={2} id='2' />,
                        <Notification title='title' key={3} id='3' />,
                    ]}
                />,
            );

            expect(baseElement).toMatchSnapshot();
        });
    });

    describe('Callbacks tests', () => {
        it('should call `onRemoveNotification` prop by timeout with notification id', () => {
            const cb = jest.fn();
            const notificationId = 'notification-1';

            render(
                <NotificationManager
                    onRemoveNotification={cb}
                    notifications={[
                        <Notification
                            title='title'
                            key={1}
                            id={notificationId}
                            autoCloseDelay={0}
                        />,
                    ]}
                />,
            );

            jest.runAllTimers();

            expect(cb).toBeCalledWith(notificationId);
        });

        it('should call `onRemoveNotification` prop by closer click', () => {
            const cb = jest.fn();
            const notificationId = 'notification-1';

            const { baseElement } = render(
                <NotificationManager
                    onRemoveNotification={cb}
                    notifications={[
                        <Notification title='title' key={1} id={notificationId} />,
                        <Notification title='title' key={2} id='notification-2' />,
                    ]}
                />,
            );

            const closer = baseElement.querySelector('button');
            if (closer) {
                fireEvent.click(closer);
            }

            expect(cb).toBeCalledWith(notificationId);
        });
    });

    it('should set `data-test-id` attribute', () => {
        const dataTestId = 'test-id';
        const { getByTestId } = render(
            <NotificationManager
                dataTestId={dataTestId}
                onRemoveNotification={jest.fn()}
                notifications={[]}
            />,
        );

        expect(getByTestId(dataTestId)).toBeInTheDocument();
    });

    it('should forward ref', () => {
        const ref = jest.fn();
        const dataTestId = 'test-id';
        const { getByTestId } = render(
            <NotificationManager
                ref={ref}
                dataTestId={dataTestId}
                onRemoveNotification={jest.fn()}
                notifications={[]}
            />,
        );

        expect(ref.mock.calls).toEqual([[getByTestId(dataTestId)]]);
    });

    it('should set `className` class', () => {
        const className = 'test-class';
        const dataTestId = 'test-id';
        const { getByTestId } = render(
            <NotificationManager
                dataTestId={dataTestId}
                onRemoveNotification={jest.fn()}
                notifications={[]}
                className={className}
            />,
        );

        expect(getByTestId(dataTestId)).toHaveClass(className);
    });

    it('should unmount without errors', () => {
        const { unmount } = render(
            <NotificationManager onRemoveNotification={jest.fn()} notifications={[]} />,
        );

        expect(unmount).not.toThrowError();
    });

    it('should render to container', () => {
        const notificationManager = (props?: Partial<NotificationManagerProps>) => (
            <React.Fragment>
                <div id='container' />
                <NotificationManager
                    dataTestId='NotificationManager'
                    notifications={[]}
                    onRemoveNotification={jest.fn()}
                    {...props}
                />
            </React.Fragment>
        );

        const { getByTestId, rerender } = render(notificationManager());

        const container = document.getElementById('container');

        rerender(notificationManager({ container: () => container as HTMLElement }));

        expect(container).toContainElement(getByTestId('NotificationManager'));
    });
});
