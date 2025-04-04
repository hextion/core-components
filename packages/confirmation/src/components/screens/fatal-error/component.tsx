import React, { FC, useContext } from 'react';
import { Button } from '@balafla/core-components-button';
import { Text } from '@balafla/core-components-typography';
import cn from 'classnames';

import { ConfirmationContext } from '../../../context';
import { Header } from '../../header';

import styles from './index.module.css';

export type FatalErrorProps = {
    /**
     * Отображать в мобильной версии экран компонента
     */
    mobile?: boolean;
};

export const FatalError: FC<FatalErrorProps> = ({ mobile }) => {
    const { alignContent, texts, onFatalErrorOkButtonClick, breakpoint, client } =
        useContext(ConfirmationContext);

    return (
        <div className={cn(styles.component, styles[alignContent])}>
            <Header mobile={mobile}>{texts.fatalErrorTitle}</Header>

            <Text
                view='primary-medium'
                color='primary'
                className={cn({
                    [styles.typographyTheme]: !mobile,
                    [styles.typographyThemeMobile]: mobile,
                })}
            >
                {texts.fatalErrorDescription}
            </Text>

            <Button
                size={mobile ? 'xs' : 's'}
                view='secondary'
                onClick={onFatalErrorOkButtonClick}
                className={styles.button}
                breakpoint={breakpoint}
                client={client}
            >
                {texts.fatalErrorButton}
            </Button>
        </div>
    );
};
