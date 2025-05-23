import { cloneElement, FC, ReactElement, useCallback, useMemo } from 'react';
import { NotificationProps as CoreNotificationProps } from '@balafla/core-components-notification';
import cn from 'classnames';

export type NotificationElement = ReactElement<CoreNotificationProps & { id: string }>;

type NotificationProps = {
    element: NotificationElement;
    className: string;
    onRemoveNotification: (id: string) => void;
};

export const Notification: FC<NotificationProps> = ({
    element,
    className,
    onRemoveNotification,
}) => {
    const { onClose, onCloseTimeout } = element.props;

    const handleClose = useCallback(() => {
        if (onClose) {
            onClose();
        }

        onRemoveNotification(element.props.id);
    }, [onClose, onRemoveNotification, element.props.id]);

    const handleCloseTimeout = useCallback(() => {
        if (onCloseTimeout) {
            onCloseTimeout();
        }

        onRemoveNotification(element.props.id);
    }, [element.props.id, onCloseTimeout, onRemoveNotification]);

    const notificationProps = useMemo<CoreNotificationProps>(
        () => ({
            ...element.props,
            visible: true,
            className: cn(className, element.props.className),
            usePortal: false,
            offset: 0,
            onClose: handleClose,
            onCloseTimeout: handleCloseTimeout,
        }),
        [element, handleClose, handleCloseTimeout, className],
    );

    return cloneElement(element, notificationProps);
};
