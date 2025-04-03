import React, { FC, useContext } from 'react';
import { Button } from '@balafla/core-components-button';
import { Link } from '@balafla/core-components-link';
import { Text } from '@balafla/core-components-typography';
import cn from 'classnames';

import { ConfirmationContext } from '../../../context';
import { getPhoneHref } from '../../../utils';
import { Header } from '../../header';

import styles from './index.module.css';

export type HintProps = {
    /**
     * Отображать в мобильной версии экран компонента
     */
    mobile?: boolean;
};

export const Hint: FC<HintProps> = ({ mobile }) => {
    const { alignContent, texts, onChangeScreen, onChangeState, breakpoint, client } =
        useContext(ConfirmationContext);

    const { domesticPhone = '', internationalPhone = '', hintButton } = texts;

    const handleReturnButtonClick = () => {
        onChangeScreen('INITIAL');
        onChangeState('INITIAL');
    };

    return (
        <div className={cn(styles.component, styles[alignContent])}>
            <Header mobile={mobile}>Не&nbsp;приходит сообщение?</Header>

            <Text
                view='primary-medium'
                color='primary'
                className={cn(styles.text, {
                    [styles.typographyTheme]: !mobile,
                    [styles.typographyThemeMobile]: mobile,
                })}
            >
                Если у&nbsp;вас изменился номер телефона, позвоните нам или обратитесь в&nbsp;любое
                отделение банка.
            </Text>

            <div
                className={cn(styles.phonesWrap, {
                    [styles.phonesWrapMobile]: mobile,
                })}
            >
                <div className={cn(styles.phoneWrap, { [styles.phoneContentMobile]: mobile })}>
                    <Link
                        href={getPhoneHref(domesticPhone)}
                        underline={false}
                        className={cn(styles.phoneLink, { [styles.typographyThemeMobile]: mobile })}
                    >
                        {domesticPhone}
                    </Link>
                    <Text
                        view='primary-medium'
                        color='primary'
                        className={cn(styles.text, {
                            [styles.typographyTheme]: !mobile,
                            [styles.typographyThemeMobile]: mobile,
                        })}
                    >
                        {mobile
                            ? 'Для\u00A0звонков по\u00A0России'
                            : ' \u2014\u00A0для звонков по\u00A0России'}
                    </Text>
                </div>

                <div className={cn(styles.phoneWrap, { [styles.phoneContentMobile]: mobile })}>
                    <Link
                        href={getPhoneHref(internationalPhone)}
                        underline={false}
                        className={cn(styles.phoneLink, { [styles.typographyThemeMobile]: mobile })}
                    >
                        {internationalPhone}
                    </Link>
                    <Text
                        view='primary-medium'
                        color='primary'
                        className={cn(styles.text, {
                            [styles.typographyTheme]: !mobile,
                            [styles.typographyThemeMobile]: mobile,
                        })}
                    >
                        {mobile
                            ? 'В\u00A0Москве и\u00A0за\u00A0границей'
                            : ' \u2014\u00A0в\u00A0Москве и\u00A0за\u00A0границей'}
                    </Text>
                </div>
            </div>

            <Text
                view='primary-medium'
                color='primary'
                className={cn(styles.text, {
                    [styles.typographyTheme]: !mobile,
                    [styles.typographyThemeMobile]: mobile,
                })}
            >
                Если номер не&nbsp;менялся, возможно, перегружен сервис отправки сообщений.
                Попробуйте повторить действие через несколько минут.
            </Text>

            <Button
                size={mobile ? 'xs' : 's'}
                view='secondary'
                onClick={handleReturnButtonClick}
                className={styles.hintButton}
                breakpoint={breakpoint}
                client={client}
            >
                {hintButton}
            </Button>
        </div>
    );
};
