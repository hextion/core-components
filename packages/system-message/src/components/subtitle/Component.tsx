import React, { useContext } from 'react';
import { createPaddingStyle, getDataTestId } from '@balafla/core-components-shared';
import type { PaddingType } from '@balafla/core-components-types';
import cn from 'classnames';

import { SystemMessageContext } from '../../Context';

import styles from './index.module.css';

type SubtitleProps = {
    /**
     * Дополнительно имя класса
     */
    className?: string;

    /**
     * Заголовок
     */
    children: React.ReactNode;

    /**
     * Отступы
     */
    padding?: PaddingType;
};

const DEFAULT_PADDING = { bottom: 12 };

export const Subtitle: React.FC<SubtitleProps> = ({
    className,
    children,
    padding = DEFAULT_PADDING,
}) => {
    const { dataTestId } = useContext(SystemMessageContext);

    return (
        <span
            className={cn(styles.component, className)}
            data-test-id={getDataTestId(dataTestId, 'subtitle')}
            style={createPaddingStyle(padding)}
        >
            {children}
        </span>
    );
};
