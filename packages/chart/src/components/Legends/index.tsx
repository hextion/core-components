import React from 'react';
import { Text } from '@balafla/core-components-typography';
import cn from 'classnames';

import { CircleIcon } from '../../icons/Circle';
import { CircleLineIcon } from '../../icons/CircleLine';
import { FilledCircleIcon } from '../../icons/FilledCircle';
import { StrokeCircleIcon } from '../../icons/StrokeCircle';
import { LegendProps } from '../../types/legend.types';
import { SeriaProps } from '../../types/seria.types';
import { DataDynamicBooleanProps } from '../../types/utils/data.types';

import styles from './index.module.css';

interface Props {
    legend: LegendProps;
    series: SeriaProps[];
    id: string;
    charts: DataDynamicBooleanProps;
    toggleChart(item: SeriaProps): void;
}

const icons = {
    circleLine: CircleLineIcon,
    filledCircle: FilledCircleIcon,
    strokeCircle: StrokeCircleIcon,
    circle: CircleIcon,
};

export const Legends = React.forwardRef<HTMLUListElement, Props>(
    ({ legend, series, id, charts, toggleChart }, ref): React.ReactElement => {
        const style: React.CSSProperties = {
            textAlign: legend.align || 'center',
            transform: `translateY(${
                (legend?.marginTop ? legend.marginTop : 0) *
                (legend.verticalAlign === 'top' ? -1 : 1)
            }px)`,
        };

        return (
            <ul ref={ref} className={cn(styles.legendWrap)} style={style}>
                {series.map((item: SeriaProps) => {
                    if (item.hideLegend || item.hide) return null;

                    const Icon = icons[item.icon] || CircleIcon;

                    return (
                        <li
                            role='presentation'
                            key={`${id}-${item.properties.dataKey}`}
                            className={cn(
                                styles.legendItem,
                                charts[`${item.properties.dataKey}`] ? '' : styles.legendUnactive,
                            )}
                            onClick={() => toggleChart(item)}
                        >
                            <div className={cn(styles.legendContent)}>
                                {Icon ? (
                                    <i className={cn(styles.legendIcon)}>
                                        <Icon
                                            fill={
                                                item.properties?.fill ||
                                                item.properties?.stroke ||
                                                ''
                                            }
                                            height={legend.iconHeight || 16}
                                        />
                                    </i>
                                ) : null}
                                <Text
                                    view='primary-medium'
                                    tag='span'
                                    className={cn(styles.legendValue)}
                                >
                                    {item.properties.name}
                                </Text>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    },
);
