import React, { Fragment, useState } from 'react';
import { BottomSheet } from '@balafla/core-components-bottom-sheet';
import { ButtonMobile } from '@balafla/core-components-button/mobile';
import cn from 'classnames';

import { TooltipMobileProps } from '../types';

import styles from './mobile.module.css';

export const TooltipMobile: React.FC<TooltipMobileProps> = ({
    onClose,
    actionButtonTitle = 'Понятно',
    content,
    targetRef,
    onOpen,
    targetClassName,
    children,
    getPortalContainer,
    targetTag: TargetTag = 'div',
    open: openProp,
    ...restProps
}) => {
    const [visible, setVisible] = useState(!!openProp);
    const show = openProp === undefined ? visible : openProp;

    const handleOpen = () => {
        if (!show) {
            if (openProp === undefined) setVisible(true);
            onOpen?.();
        }
    };

    const handleClose = () => {
        if (show) {
            if (openProp === undefined) setVisible(false);
            onClose?.();
        }
    };

    return (
        <Fragment>
            <BottomSheet
                open={show}
                actionButton={
                    <ButtonMobile view='secondary' block={true} size={56} onClick={handleClose}>
                        {actionButtonTitle}
                    </ButtonMobile>
                }
                {...restProps}
                container={getPortalContainer}
                onClose={handleClose}
            >
                {content}
            </BottomSheet>

            {/** TODO: проверить тултип на доступность */}
            <TargetTag
                ref={targetRef as React.Ref<HTMLDivElement>}
                onClick={handleOpen}
                className={cn(styles.target, targetClassName, {
                    [styles.inline]: TargetTag === 'span',
                })}
            >
                {children?.props.disabled && <div className={styles.overlap} />}
                {children}
            </TargetTag>
        </Fragment>
    );
};
