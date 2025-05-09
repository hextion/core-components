/* eslint-disable complexity */
import React, { FC, RefCallback, useCallback, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ButtonDesktop as Button } from '@balafla/core-components-button/desktop';
import cn from 'classnames';
import isEqual from 'date-fns/isEqual';
import isLastDayOfMonth from 'date-fns/isLastDayOfMonth';
import isSameDay from 'date-fns/isSameDay';
import isToday from 'date-fns/isToday';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfMonth from 'date-fns/startOfMonth';

import { usePrevious } from '@alfalab/hooks';

import { Day, DayAddons } from '../../typings';
import { getSelectionRange, russianWeekDay, WEEKDAYS } from '../../utils';

import styles from './index.module.css';

export type DaysTableProps = {
    /**
     * Массив-календарь недель
     */
    weeks?: Day[][];

    /**
     * Активный месяц
     */
    activeMonth?: Date;

    /**
     * Начало выделенного периода
     */
    selectedFrom?: Date | number;

    /**
     * Конец выделенного периода
     */
    selectedTo?: Date | number;

    /**
     * Индикатор, что выбран полный период
     */
    rangeComplete?: boolean;

    /**
     * Подсвеченная дата (ховер)
     */
    highlighted?: Date | number;

    /**
     * Доп. пропсы для переданного дня
     */
    getDayProps: (day: Day) => Record<string, unknown> & {
        ref: RefCallback<HTMLTableDataCellElement>;
        onClick: (e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    };

    /**
     * Нужно ли рендерить шапку
     */
    hasHeader?: boolean;

    /**
     * Должен ли календарь подстраиваться под ширину родителя.
     */
    responsive?: boolean;

    /**
     * Дополнительный контент под числом
     */
    dayAddons?: DayAddons[];

    /**
     * Форма ячейки дня
     */
    shape?: 'rounded' | 'rectangular';

    /**
     * Рендерит компонент, обернутый в Transition
     */
    withTransition?: boolean;
};

export const DaysTable: FC<DaysTableProps> = ({
    weeks = [],
    activeMonth = new Date(),
    highlighted,
    selectedFrom,
    selectedTo,
    rangeComplete = selectedFrom && selectedTo,
    getDayProps,
    hasHeader = true,
    responsive,
    shape = 'rounded',
    withTransition = true,
}) => {
    const activeMonthRef = useRef(activeMonth);
    const directionRef = useRef<'right' | 'left' | undefined>();

    activeMonthRef.current = activeMonth;

    const prevActiveMonth = usePrevious(activeMonth);

    if (prevActiveMonth && prevActiveMonth !== activeMonth) {
        directionRef.current = activeMonth < prevActiveMonth ? 'right' : 'left';
    }

    const selection = getSelectionRange(selectedFrom, selectedTo, highlighted);

    const renderHeader = useCallback(
        () =>
            WEEKDAYS.map((dayName) => (
                <th className={styles.dayName} key={dayName}>
                    {dayName}
                </th>
            )),
        [],
    );

    const renderDay = (day: Day, dayIdx: number) => {
        if (!day) return <td key={dayIdx} />;
        const daySelected =
            day.selected ||
            (selectedFrom && isSameDay(day.date, selectedFrom)) ||
            (selectedTo && isSameDay(day.date, selectedTo));

        const dayHighlighted = highlighted && isEqual(day.date, highlighted);
        const inRange = selection && isWithinInterval(day.date, selection);

        const firstDayOfMonth = day.date.getDate() === 1;
        const lastDayOfMonth = isLastDayOfMonth(day.date);

        const firstDayOfWeek = russianWeekDay(day.date) === 0;
        const lastDayOfWeek = russianWeekDay(day.date) === 6;

        const transitLeft = firstDayOfMonth && inRange && selection && day.date > selection.start;
        const transitRight = lastDayOfMonth && inRange && selection && day.date < selection.end;

        const rangeStart = selection && isSameDay(day.date, selection.start);
        const rangeEnd = selection && isSameDay(day.date, selection.end);

        const sharpTransitLeft =
            firstDayOfWeek &&
            firstDayOfMonth &&
            inRange &&
            selection &&
            (isSameDay(day.date, selection.start) || isSameDay(day.date, selection.end));

        const sharpTransitRight =
            lastDayOfWeek &&
            lastDayOfMonth &&
            inRange &&
            selection &&
            (isSameDay(day.date, selection.start) || isSameDay(day.date, selection.end));

        const dayProps = getDayProps(day);

        const { onClick } = dayProps;

        const handleDayClick = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
            if (!day.disabled) onClick(e);
        };

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <td
                {...dayProps}
                key={day.date.getTime()}
                className={cn(styles.dayWrapper, {
                    [styles.range]: inRange,
                    [styles.rangeComplete]: inRange && rangeComplete,
                    [styles.transitLeft]: transitLeft,
                    [styles.transitRight]: transitRight,
                    [styles.sharpTransitLeft]: sharpTransitLeft,
                    [styles.sharpTransitRight]: sharpTransitRight,
                    [styles.rangeStart]: rangeStart,
                    [styles.rangeEnd]: rangeEnd,
                    [styles.cursorPointer]: !day.disabled,
                    [styles.shapeRectangular]: shape === 'rectangular',
                })}
                align='center'
                ref={(node) => {
                    /**
                     * После анимации реф-коллбэк вызывается еще раз, и в него передается null и старый activeMonth.
                     * Поэтому приходится хранить актуальный месяц в рефе и сравнивать с ним.
                     */
                    if (startOfMonth(day.date).getTime() === activeMonthRef.current.getTime()) {
                        dayProps.ref(node as HTMLTableDataCellElement);
                    }
                }}
                onClick={handleDayClick}
            >
                <Button
                    type='button'
                    view='text'
                    size='xs'
                    disabled={day.disabled}
                    className={cn(styles.day, styles[shape], {
                        [styles.dayAddons]: day.dayAddon,
                        [styles.selected]: daySelected,
                        [styles.today]: isToday(day.date),
                        [styles.disabled]: day.disabled,
                        [styles.holiday]: !day.disabled && day.holiday,
                        [styles.highlighted]: dayHighlighted,
                    })}
                >
                    <span className={cn(styles.dayContent, { [styles.today]: isToday(day.date) })}>
                        {day.date.getDate()}
                    </span>
                    <span
                        className={cn(styles.addons, {
                            [styles.dot]: day.event,
                            [styles.bottomAddon]: day.dayAddon,
                            [styles.selected]: daySelected,
                        })}
                    >
                        {day.dayAddon}
                    </span>
                </Button>
            </td>
        );
    };

    const renderWeek = (week: Day[], weekIdx: number) => (
        <tr key={weekIdx}>{week.map(renderDay)}</tr>
    );

    const renderMonth = () => <tbody>{weeks.map(renderWeek)}</tbody>;

    return (
        <table
            className={cn(styles.daysTable, directionRef.current && styles[directionRef.current], {
                [styles.responsive]: responsive,
            })}
        >
            {hasHeader && (
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
            )}
            {withTransition ? (
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={activeMonth.getTime()}
                        timeout={300}
                        classNames={{
                            enter: styles.daysEnter,
                            enterActive: styles.daysEnterActive,
                            exit: styles.daysExit,
                            exitActive: styles.daysExitActive,
                        }}
                    >
                        {renderMonth()}
                    </CSSTransition>
                </TransitionGroup>
            ) : (
                renderMonth()
            )}
        </table>
    );
};
