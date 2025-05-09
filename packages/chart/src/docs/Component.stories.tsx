import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { number, boolean, select, text, object } from '@storybook/addon-knobs';
import format from 'date-fns/format';
import { Chart } from '@balafla/core-components-chart';
import {
    stylesStringToObj,
    getQueryParam,
} from '../../../screenshot-utils/screenshots-story/utils';

const meta: Meta<typeof Chart> = {
    title: 'Components/Chart',
    component: Chart,
    id: 'Chart',
};

type Story = StoryObj<typeof Chart>;

export const chart_bar: Story = {
    name: 'Chart.Bar',
    render: () => {
        const clearData = (obj) => {
            const copy = JSON.parse(JSON.stringify(obj));
            const labels = ['label', 'label', '...'];
            const series = copy.series.map((item) => {
                item.data = [
                    {
                        label: 'label',
                        value: 'value',
                    },
                    '...',
                ];
                return item;
            });
            return { ...obj, labels, series };
        };
        const orientationVertical = {
            bottom: 'bottom',
            top: 'top',
        };
        const orientationHorizontal = {
            left: 'left',
            right: 'right',
        };
        const alignHorizontal = {
            left: 'left',
            center: 'center',
            right: 'right',
        };
        const alignVertical = {
            bottom: 'bottom',
            middle: 'middle',
            top: 'top',
        };
        const linesType = {
            linear: 'linear',
            monotone: 'monotone',
            step: 'step',
        };
        const animationType = {
            ease: 'ease',
            'ease-in': 'ease-in',
            'ease-out': 'ease-out',
            'ease-in-out': 'ease-in-out',
            linear: 'linear',
        };
        const iconTypes = {
            circleLine: 'circleLine',
            filledCircle: 'filledCircle',
            strokeCircle: 'strokeCircle',
            circle: 'circle',
        };
        const responsiveContainerId = 'responsiveContainer';
        const cartesianGridId = 'cartesianGrid';
        const composeChartId = 'composeChart';
        const xAxisId = 'xAxis';
        const yAxisId = 'yAxis';
        const legendId = 'legend';
        const tooltipId = 'tooltip';
        const brushId = 'brush';
        const lineId = 'line';
        const barIdFirst = 'barFirst';
        const barIdSecond = 'barSecond';
        const debounce = number('debounce', 0, {}, responsiveContainerId);
        const vertical = boolean('vertical', false, cartesianGridId);
        const horizontal = boolean('horizontal', true, cartesianGridId);
        const strokeDasharray = number('strokeDasharray', 0, {}, cartesianGridId);
        const stroke = text('stroke', 'var(--color-light-neutral-400)', cartesianGridId);
        const fill = text('fill', 'var(--color-light-base-bg-primary)', cartesianGridId);
        const initMarginTop = number('initMargin.top', 40, {}, composeChartId);
        const initMarginBottom = number('initMargin.bottom', 20, {}, composeChartId);
        const marginLeft = number('initMargin.left', 20, {}, composeChartId);
        const marginRight = number('initMargin.right', 50, {}, composeChartId);
        const barCategoryGap = text('barCategoryGap', '30%', composeChartId);
        const barGap = number('barGap', 4, {}, composeChartId);
        const maxBarSize = number('maxBarSize', 24, {}, composeChartId);
        const xAxisHide = boolean('hide', false, xAxisId);
        const xAxisOrientation = select('orientation', orientationVertical, 'bottom', xAxisId);
        const xAxisAngle = number('angle', 0, {}, xAxisId);
        const xAxisTickLine = boolean('tickLine', false, xAxisId);
        const xAxisTickSize = number('tickSize', 6, {}, xAxisId);
        const xAxisMirror = boolean('mirror', false, xAxisId);
        const xAxisReversed = boolean('reversed', false, xAxisId);
        const xAxisTickMargin = number('tickMargin', 10, {}, xAxisId);
        const xAxisMinTickGap = number('minTickGap', 5, {}, xAxisId);
        const xAxisLine = boolean('axisLine', false, xAxisId);
        const yAxisHide = boolean('hide', false, yAxisId);
        const yAxisOrientation = select('orientation', orientationHorizontal, 'left', yAxisId);
        const yAxisAngle = number('angle', 0, {}, yAxisId);
        const yAxisTickLine = boolean('tickLine', false, yAxisId);
        const yAxisTickSize = number('tickSize', 6, {}, yAxisId);
        const yAxisMirror = boolean('mirror', false, yAxisId);
        const yAxisReversed = boolean('reversed', false, yAxisId);
        const yAxisTickCoiunt = number('tickCount', 6, {}, yAxisId);
        const yAxisTickMargin = number('tickMargin', 0, {}, yAxisId);
        const yAxisMinTickGap = number('minTickGap', 5, {}, yAxisId);
        const yAxisLine = boolean('axisLine', false, yAxisId);
        const yAxisLabel = text('label', 'тыс.', yAxisId);
        const legendAlign = select('align', alignHorizontal, 'center', legendId);
        const legendVerticalAlign = select('verticalAlign', alignVertical, 'bottom', legendId);
        const legendMarginTop = number('marginTop', 10, {}, legendId);
        const legendIconHeight = number('iconHeight', 16, {}, legendId);
        const tooltipArrow = boolean('arrow', true, tooltipId);
        const tooltipIsAnimationActive = boolean('isAnimationActive', true, tooltipId);
        const tooltipSeparator = text('separator', ' ', tooltipId);
        const tooltipOffset = number('offset', 20, {}, tooltipId);
        const cursorStroke = text('cursor.stroke', 'var(--color-light-neutral-400)', tooltipId);
        const cursorStrokeWidth = number('cursor.strokeWidth', 1, {}, tooltipId);
        const tooltipFilterNull = boolean('filterNull', true, tooltipId);
        const tooltipAnimationBegin = number('animationBegin', 0, {}, tooltipId);
        const tooltipAnimationDuration = number('animationDuration', 500, {}, tooltipId);
        const tooltipAnimationEasing = select('animationEasing', animationType, 'ease', tooltipId);
        const travellerWidth = number('travellerWidth', 20, {}, brushId);
        const brushHeight = number('height', 20, {}, brushId);
        const brushStartIndex = number('startIndex', 0, { min: 0, max: 5 }, brushId);
        const brushEndIndex = number('endIndex', 5, { min: 0, max: 5 }, brushId);
        const brushStroke = text('stroke', 'var(--color-static-status-blue)', brushId);
        const brushMargin = number('brushMargin', 10, { min: 0, max: 100 }, brushId);
        const brushHeightAlwaysShowText = boolean('alwaysShowText', true, brushId);
        const lineHide = boolean('hide', false, lineId);
        const lineHideLegend = boolean('hideLegend', false, lineId);
        const lineHideTooltip = boolean('hideTooltip', false, lineId);
        const lineZIndex = number('zIndex', 50, {}, lineId);
        const lineIcon = select('icon', iconTypes, 'circleLine', lineId);
        const lineName = text('properties.name', 'остаток', lineId);
        const lineStroke = text('properties.stroke', 'var(--color-static-status-blue)', lineId);
        const lineDot = boolean('properties.dot', false, lineId);
        const lineScale = number('properties.dotSettings.scale', 1.5, {}, lineId);
        const lineInitScale = number('properties.dotSettings.initScale', 1, {}, lineId);
        const lineWidth = number('properties.dotSettings.width', 18, {}, lineId);
        const lineType = select('properties.type', linesType, 'monotone', lineId);
        const lineInheritStroke = boolean('properties.inheritStroke', true, lineId);
        const lineStrokeWidth = number('properties.strokeWidth', 2, {}, lineId);
        const lineStrokeDasharray = text('properties.strokeDasharray', '1 0', lineId);
        const barHideLegendFirst = boolean('hideLegend', false, barIdFirst);
        const barHideTooltipFirst = boolean('hideTooltip', false, barIdFirst);
        const barZIndexFirst = number('zIndex', 1, {}, barIdFirst);
        const barIconFirst = select('icon', iconTypes, 'circle', barIdFirst);
        const barFillFirst = text(
            'properties.fill',
            'var(--color-static-graphic-persimmon)',
            barIdFirst,
        );
        const barNameFirst = text('properties.name', 'расход', barIdFirst);
        const barHideLegendSecond = boolean('hideLegend', false, barIdSecond);
        const barHideTooltipSecond = boolean('hideTooltip', false, barIdSecond);
        const barZIndexSecond = number('zIndex', 10, {}, barIdSecond);
        const barIconSecond = select('icon', iconTypes, 'circle', barIdSecond);
        const barFillSecond = text(
            'properties.fill',
            'var(--color-static-graphic-green-jungle)',
            barIdSecond,
        );
        const barNameSecond = text('properties.name', 'приход', barIdSecond);
        const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));
        const isPreview = Object.keys(previewStyles).length > 0;
        const responsiveContainer = {
            debounce,
        };
        const cartesianGrid = {
            vertical,
            horizontal,
            strokeDasharray,
            stroke,
            fill: isPreview ? 'var(--color-light-base-bg-secondary)' : fill,
        };
        const composeChart = {
            initMargin: {
                top: initMarginTop,
                bottom: initMarginBottom,
                left: marginLeft,
                right: marginRight,
            },
            barGap,
            maxBarSize,
            barCategoryGap,
        };
        const xAxis = {
            hide: xAxisHide,
            axisLine: xAxisLine,
            type: 'category',
            allowDecimals: true,
            allowDuplicatedCategory: true,
            angle: xAxisAngle,
            tickCount: 5,
            interval: 'preserveStartEnd',
            minTickGap: xAxisMinTickGap,
            tickLine: xAxisTickLine,
            tickSize: xAxisTickSize,
            mirror: xAxisMirror,
            reversed: xAxisReversed,
            tickMargin: xAxisTickMargin,
            dataKey: 'label',
            orientation: xAxisOrientation,
        };
        const yAxis = {
            hide: yAxisHide,
            axisLine: yAxisLine,
            type: 'number',
            allowDecimals: true,
            allowDuplicatedCategory: true,
            angle: yAxisAngle,
            tickCount: yAxisTickCoiunt,
            interval: 'preserveStartEnd',
            minTickGap: yAxisMinTickGap,
            tickLine: yAxisTickLine,
            tickSize: yAxisTickSize,
            mirror: yAxisMirror,
            reversed: yAxisReversed,
            tickMargin: yAxisTickMargin,
            tickFormatter: (decimal) => `${decimal}\xa0${yAxisLabel}`,
            orientation: yAxisOrientation,
        };
        const legend = {
            verticalAlign: legendVerticalAlign,
            align: legendAlign,
            marginTop: legendMarginTop,
            iconHeight: legendIconHeight,
        };
        const tooltip = {
            separator: tooltipSeparator,
            offset: tooltipOffset,
            filterNull: tooltipFilterNull,
            cursor: {
                stroke: cursorStroke,
                strokeWidth: cursorStrokeWidth,
            },
            isAnimationActive: tooltipIsAnimationActive,
            animationBegin: tooltipAnimationBegin,
            animationDuration: tooltipAnimationDuration,
            animationEasing: tooltipAnimationEasing,
            arrow: tooltipArrow,
        };
        const brush = {
            dataKey: 'label',
            travellerWidth,
            startIndex: brushStartIndex,
            endIndex: brushEndIndex,
            brushMargin: brushMargin,
            height: brushHeight,
            alwaysShowText: brushHeightAlwaysShowText,
            stroke: brushStroke,
        };
        const labelsBarChart = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];
        const barChartFirst = {
            hide: barHideLegendFirst,
            hideLegend: barHideLegendFirst,
            hideTooltip: barHideTooltipFirst,
            zIndex: barZIndexFirst,
            chart: 'bar',
            icon: barIconFirst,
            properties: {
                name: barNameFirst,
                dataKey: 'uv',
                formatter: (decimal) => `${decimal * 1000}`,
                fill: barFillFirst,
            },
            data: [
                {
                    label: 'Январь',
                    value: 80,
                },
                {
                    label: 'Февраль',
                    value: 140,
                },
                {
                    label: 'Март',
                    value: 70,
                },
                {
                    label: 'Апрель',
                    value: 210,
                },
                {
                    label: 'Май',
                    value: 80,
                },
                {
                    label: 'Июнь',
                    value: 20,
                },
            ],
        };
        const barChartSecond = {
            hide: barHideLegendSecond,
            hideLegend: barHideLegendSecond,
            hideTooltip: barHideTooltipSecond,
            zIndex: barZIndexSecond,
            chart: 'bar',
            icon: barIconSecond,
            properties: {
                name: barNameSecond,
                dataKey: 'pv',
                formatter: (decimal) => `${decimal * 1000}`,
                fill: barFillSecond,
            },
            data: [
                {
                    label: 'Январь',
                    value: 110,
                },
                {
                    label: 'Февраль',
                    value: 190,
                },
                {
                    label: 'Март',
                    value: 60,
                },
                {
                    label: 'Апрель',
                    value: 230,
                },
                {
                    label: 'Май',
                    value: 190,
                },
                {
                    label: 'Июнь',
                    value: 30,
                },
            ],
        };
        const lineChart = {
            hide: lineHide,
            hideLegend: lineHideLegend,
            hideTooltip: lineHideTooltip,
            zIndex: lineZIndex,
            chart: 'line',
            icon: lineIcon,
            properties: {
                name: lineName,
                dataKey: 'cnt',
                stroke: lineStroke,
                dot: lineDot,
                dotSettings: {
                    scale: lineScale,
                    initScale: lineInitScale,
                    width: lineWidth,
                    height: lineWidth,
                },
                inheritStroke: lineInheritStroke,
                formatter: (decimal) => `${decimal * 1000}`,
                type: lineType,
                strokeWidth: lineStrokeWidth,
                strokeDasharray: lineStrokeDasharray,
            },
            data: [
                {
                    label: 'Январь',
                    value: 60,
                },
                {
                    label: 'Февраль',
                    value: 95,
                },
                {
                    label: 'Март',
                    value: 20,
                },
                {
                    label: 'Апрель',
                    value: 180,
                },
                {
                    label: 'Май',
                    value: 70,
                },
                {
                    label: 'Июнь',
                    value: 10,
                },
            ],
        };
        const barChartOptions = {
            id: 'bar-chart',
            composeChart,
            responsiveContainer,
            cartesianGrid,
            xAxis,
            yAxis,
            tooltip,
            legend,
            brush,
            labels: labelsBarChart,
            series: [barChartFirst, barChartSecond, lineChart],
        };
        const styleWrapperChart = {
            marginBottom: '20px',
            top: 25,
            width: '1050px',
            height: '600px',
        };
        return (
            <div style={{ display: 'flex', ...previewStyles }}>
                <div
                    style={{
                        ...styleWrapperChart,
                        ...(isPreview && { width: '644px', height: '407px' }),
                    }}
                >
                    <Chart
                        id='bar-chart'
                        composeChart={composeChart}
                        responsiveContainer={responsiveContainer}
                        cartesianGrid={cartesianGrid}
                        xAxis={xAxis}
                        yAxis={yAxis}
                        tooltip={tooltip}
                        legend={!isPreview && legend}
                        brush={!isPreview && brush}
                        labels={labelsBarChart}
                        series={[barChartFirst, barChartSecond, lineChart]}
                    />
                </div>
                {!isPreview && (
                    <div style={{ width: '500px', height: '600px', overflow: 'auto' }}>
                        <pre>{JSON.stringify(clearData(barChartOptions), null, 2)}</pre>
                    </div>
                )}
            </div>
        );
    },
};

export const chart_line: Story = {
    name: 'Chart.Line',
    render: () => {
        const clearData = (obj) => {
            const copy = JSON.parse(JSON.stringify(obj));
            const labels = ['label', 'label', '...'];
            const series = copy.series.map((item) => {
                item.data = [
                    {
                        label: 'label',
                        value: 'value',
                    },
                    '...',
                ];
                return item;
            });
            return { ...obj, labels, series };
        };
        const formatXAxis = (time) => format(time, 'dd LLL');
        const orientationVertical = {
            bottom: 'bottom',
            top: 'top',
        };
        const orientationHorizontal = {
            left: 'left',
            right: 'right',
        };
        const alignHorizontal = {
            left: 'left',
            center: 'center',
            right: 'right',
        };
        const alignVertical = {
            bottom: 'bottom',
            middle: 'middle',
            top: 'top',
        };
        const linesType = {
            linear: 'linear',
            monotone: 'monotone',
            step: 'step',
        };
        const animationType = {
            ease: 'ease',
            'ease-in': 'ease-in',
            'ease-out': 'ease-out',
            'ease-in-out': 'ease-in-out',
            linear: 'linear',
        };
        const iconTypes = {
            circleLine: 'circleLine',
            filledCircle: 'filledCircle',
            strokeCircle: 'strokeCircle',
            circle: 'circle',
        };
        const responsiveContainerId = 'responsiveContainerId';
        const cartesianGridId = 'cartesianGridId';
        const composeChartId = 'composeChartId';
        const xAxisId = 'xAxisId';
        const yAxisId = 'yAxisId';
        const legendId = 'legendId';
        const tooltipId = 'tooltipId';
        const brushId = 'brushId';
        const lineId = 'lineId';
        const areaId = 'areaId';
        const debounce = number('debounce', 0, {}, responsiveContainerId);
        const vertical = boolean('vertical', true, cartesianGridId);
        const horizontal = boolean('horizontal', true, cartesianGridId);
        const strokeDasharray = number('strokeDasharray', 0, {}, cartesianGridId);
        const stroke = text('stroke', 'var(--color-light-neutral-400)', cartesianGridId);
        const fill = text('fill', 'var(--color-light-base-bg-primary)', cartesianGridId);
        const initMarginTop = number('initMargin.top', 40, {}, composeChartId);
        const initMarginBottom = number('initMargin.bottom', 20, {}, composeChartId);
        const marginLeft = number('initMargin.left', 20, {}, composeChartId);
        const marginRight = number('initMargin.right', 70, {}, composeChartId);
        const barCategoryGap = text('barCategoryGap', '30%', composeChartId);
        const barSize = number('barSize', 24, {}, composeChartId);
        const maxBarSize = number('maxBarSize', 24, {}, composeChartId);
        const xAxisHide = boolean('hide', false, xAxisId);
        const xAxisOrientation = select('orientation', orientationVertical, 'bottom', xAxisId);
        const xAxisAngle = number('angle', 0, {}, xAxisId);
        const xAxisTickLine = boolean('tickLine', false, xAxisId);
        const xAxisTickSize = number('tickSize', 6, {}, xAxisId);
        const xAxisMirror = boolean('mirror', false, xAxisId);
        const xAxisReversed = boolean('reversed', false, xAxisId);
        const xAxisTickMargin = number('tickMargin', 2, {}, xAxisId);
        const xAxisMinTickGap = number('minTickGap', 20, {}, xAxisId);
        const xAxisLine = boolean('axisLine', false, xAxisId);
        const yAxisHide = boolean('hide', false, yAxisId);
        const yAxisOrientation = select('orientation', orientationHorizontal, 'left', yAxisId);
        const yAxisAngle = number('angle', 0, {}, yAxisId);
        const yAxisTickLine = boolean('tickLine', false, yAxisId);
        const yAxisTickSize = number('tickSize', 6, {}, yAxisId);
        const yAxisMirror = boolean('mirror', false, yAxisId);
        const yAxisReversed = boolean('reversed', false, yAxisId);
        const yAxisTickCoiunt = number('tickCount', 6, {}, yAxisId);
        const yAxisMinTickGap = number('minTickGap', 5, {}, yAxisId);
        const yAxisTickMargin = number('tickMargin', 0, {}, yAxisId);
        const yAxisLine = boolean('axisLine', false, yAxisId);
        const yAxisLabel = text('label', '', yAxisId);
        const legendAlign = select('align', alignHorizontal, 'right', legendId);
        const legendVerticalAlign = select('verticalAlign', alignVertical, 'top', legendId);
        const legendMarginTop = number('marginTop', 20, {}, legendId);
        const legendIconHeight = number('iconHeight', 20, {}, legendId);
        const tooltipArrow = boolean('arrow', true, tooltipId);
        const tooltipIsAnimationActive = boolean('isAnimationActive', true, tooltipId);
        const tooltipSeparator = text('separator', ' ', tooltipId);
        const tooltipOffset = number('offset', 20, {}, tooltipId);
        const cursorStroke = text('cursor.stroke', 'var(--color-light-neutral-400)', tooltipId);
        const cursorStrokeWidth = number('cursor.strokeWidth', 1, {}, tooltipId);
        const tooltipFilterNull = boolean('filterNull', true, tooltipId);
        const tooltipAnimationBegin = number('animationBegin', 0, {}, tooltipId);
        const tooltipAnimationDuration = number('animationDuration', 500, {}, tooltipId);
        const tooltipAnimationEasing = select('animationEasing', animationType, 'ease', tooltipId);
        const travellerWidth = number('travellerWidth', 20, {}, brushId);
        const brushHeight = number('height', 20, {}, brushId);
        const brushStartIndex = number('startIndex', 0, { min: 0, max: 47 }, brushId);
        const brushEndIndex = number('endIndex', 47, { min: 0, max: 47 }, brushId);
        const brushStroke = text('stroke', 'var(--color-static-status-blue)', brushId);
        const brushMargin = number('brushMargin', 10, { min: 0, max: 100 }, brushId);
        const brushHeightAlwaysShowText = boolean('alwaysShowText', true, brushId);
        const lineHide = boolean('hide', false, lineId);
        const lineHideLegend = boolean('hideLegend', false, lineId);
        const lineHideTooltip = boolean('hideTooltip', false, lineId);
        const lineIcon = select('icon', iconTypes, 'strokeCircle', lineId);
        const lineName = text('properties.name', 'текущий период', lineId);
        const lineStroke = text('properties.stroke', 'var(--color-static-status-blue)', lineId);
        const lineDot = boolean('properties.dot', true, lineId);
        const lineScale = number('properties.dotSettings.scale', 1.5, {}, lineId);
        const lineInitScale = number('properties.dotSettings.initScale', 0, {}, lineId);
        const lineStrokeWidth = number('properties.strokeWidth', 2, {}, lineId);
        const lineInheritStroke = boolean('properties.inheritStroke', true, lineId);
        const lineType = select('properties.type', linesType, 'monotone', lineId);
        const lineWidth = number('properties.dotSettings.width', 18, {}, lineId);
        const lineStrokeDasharray = text('properties.strokeDasharray', '10 10', lineId);
        const areaHide = boolean('hide', false, areaId);
        const areaHideLegend = boolean('hideLegend', false, areaId);
        const areaHideTooltip = boolean('hideTooltip', false, areaId);
        const areaZIndex = number('zIndex', 100, {}, areaId);
        const areaIcon = select('icon', iconTypes, 'filledCircle', areaId);
        const areaOffset = number('offset', 0.1, { min: 0, max: 1, step: 0.1 }, areaId);
        const areaColor_1 = text('gradient.points.color above', 'rgba(0, 112, 224, 0.2)', areaId);
        const areaColorOpacity_1 = number(
            'gradient.points.opacity of color above',
            1,
            { min: 0, max: 1, step: 0.1 },
            areaId,
        );
        const areaColor_2 = text('gradient.points.color below', 'rgba(0, 128, 255, 0)', areaId);
        const areaColorOpacity_2 = number(
            'gradient opacity of color below',
            1,
            { min: 0, max: 1, step: 0.1 },
            areaId,
        );
        const areaName = text('properties.name', 'предыдущий период', areaId);
        const areaType = select('properties.type', linesType, 'monotone', areaId);
        const areaStroke = text('properties.stroke', 'var(--color-static-status-blue)', areaId);
        const areaScale = number('properties.dotSettings.scale', 1.5, {}, areaId);
        const areaInitScale = number('properties.dotSettings.initScale', 0, {}, areaId);
        const areaWidth = number('properties.dotSettings.width', 18, {}, areaId);
        const areaStrokeWidth = number('properties.strokeWidth', 2, {}, areaId);
        const areaDot = boolean('properties.dot', true, areaId);
        const responsiveContainer = {
            debounce,
        };
        const cartesianGrid = {
            vertical,
            horizontal,
            strokeDasharray,
            stroke,
            fill,
        };
        const composeChart = {
            initMargin: {
                top: initMarginTop,
                bottom: initMarginBottom,
                left: marginLeft,
                right: marginRight,
            },
            barCategoryGap,
            barSize,
            maxBarSize,
        };
        const xAxis = {
            hide: xAxisHide,
            axisLine: xAxisLine,
            type: 'category',
            allowDecimals: true,
            allowDuplicatedCategory: true,
            angle: xAxisAngle,
            tickCount: 5,
            interval: 'preserveStartEnd',
            minTickGap: xAxisMinTickGap,
            tickLine: xAxisTickLine,
            tickSize: xAxisTickSize,
            mirror: xAxisMirror,
            reversed: xAxisReversed,
            dataKey: 'label',
            tickMargin: xAxisTickMargin,
            orientation: xAxisOrientation,
            tickFormatter: formatXAxis,
            tickType: 'point',
        };
        const yAxis = {
            hide: yAxisHide,
            axisLine: yAxisLine,
            type: 'number',
            allowDecimals: true,
            allowDuplicatedCategory: true,
            angle: yAxisAngle,
            tickCount: yAxisTickCoiunt,
            interval: 'preserveStartEnd',
            minTickGap: yAxisMinTickGap,
            tickLine: yAxisTickLine,
            tickSize: yAxisTickSize,
            mirror: yAxisMirror,
            reversed: yAxisReversed,
            tickFormatter: (decimal) => `${decimal}\xa0${yAxisLabel}`,
            orientation: yAxisOrientation,
            tickMargin: yAxisTickMargin,
        };
        const legend = {
            verticalAlign: legendVerticalAlign,
            align: legendAlign,
            marginTop: legendMarginTop,
            iconHeight: legendIconHeight,
        };
        const tooltip = {
            separator: tooltipSeparator,
            offset: tooltipOffset,
            filterNull: tooltipFilterNull,
            cursor: {
                stroke: cursorStroke,
                strokeWidth: cursorStrokeWidth,
            },
            isAnimationActive: tooltipIsAnimationActive,
            animationBegin: tooltipAnimationBegin,
            animationDuration: tooltipAnimationDuration,
            animationEasing: tooltipAnimationEasing,
            arrow: tooltipArrow,
            labelFormatter: formatXAxis,
        };
        const brush = {
            dataKey: 'label',
            travellerWidth,
            startIndex: brushStartIndex,
            endIndex: brushEndIndex,
            brushMargin: brushMargin,
            height: brushHeight,
            stroke: brushStroke,
            alwaysShowText: brushHeightAlwaysShowText,
            tickFormatter: formatXAxis,
        };
        const labelsLineChart = [
            1608242400000, 1608328800000, 1608415200000, 1608501600000, 1608588000000,
            1608674400000, 1608760800000, 1608847200000, 1608933600000, 1609020000000,
            1609106400000, 1609192800000, 1609279200000, 1609365600000, 1609452000000,
            1609538400000, 1609624800000, 1609711200000, 1609797600000, 1609884000000,
            1609970400000, 1610056800000, 1610143200000, 1610229600000, 1610316000000,
            1610402400000, 1610488800000, 1610575200000, 1610661600000, 1610748000000,
            1610834400000, 1610920800000, 1611007200000, 1611093600000, 1611180000000,
            1611266400000, 1611352800000, 1611439200000, 1611525600000, 1611612000000,
            1611698400000, 1611784800000, 1611871200000, 1611957600000, 1612044000000,
            1612130400000, 1612216800000, 1612303200000,
        ];
        const lineChart = {
            hide: lineHide,
            hideLegend: lineHideLegend,
            hideTooltip: lineHideTooltip,
            zIndex: 200,
            chart: 'line',
            icon: lineIcon,
            properties: {
                name: lineName,
                dataKey: 'b',
                stroke: lineStroke,
                dot: lineDot,
                dotSettings: {
                    scale: lineScale,
                    initScale: lineInitScale,
                    width: lineWidth,
                    height: lineWidth,
                },
                inheritStroke: lineInheritStroke,
                type: lineType,
                strokeWidth: lineStrokeWidth,
                strokeDasharray: lineStrokeDasharray,
            },
            data: [
                {
                    label: 1608242400000,
                    value: 35,
                },
                {
                    label: 1608328800000,
                    value: 20,
                },
                {
                    label: 1608415200000,
                    value: 34,
                },
                {
                    label: 1608501600000,
                    value: 42,
                },
                {
                    label: 1608588000000,
                    value: 14,
                },
                {
                    label: 1608674400000,
                    value: 37,
                },
                {
                    label: 1608760800000,
                    value: 19,
                },
                {
                    label: 1608847200000,
                    value: 37,
                },
                {
                    label: 1608933600000,
                    value: 22,
                },
                {
                    label: 1609020000000,
                    value: 21,
                },
                {
                    label: 1609106400000,
                    value: 28,
                },
                {
                    label: 1609192800000,
                    value: 26,
                },
                {
                    label: 1609279200000,
                    value: 31,
                },
                {
                    label: 1609365600000,
                    value: 37,
                },
                {
                    label: 1609452000000,
                    value: 40,
                },
                {
                    label: 1609538400000,
                    value: 39,
                },
                {
                    label: 1609624800000,
                    value: 45,
                },
                {
                    label: 1609711200000,
                    value: 40,
                },
                {
                    label: 1609797600000,
                    value: 45,
                },
                {
                    label: 1609884000000,
                    value: 40,
                },
                {
                    label: 1609970400000,
                    value: 45,
                },
                {
                    label: 1610056800000,
                    value: 46,
                },
                {
                    label: 1610143200000,
                    value: 36,
                },
                {
                    label: 1610229600000,
                    value: 50,
                },
                {
                    label: 1610316000000,
                    value: 44,
                },
                {
                    label: 1610402400000,
                    value: 55,
                },
                {
                    label: 1610488800000,
                    value: 59,
                },
                {
                    label: 1610575200000,
                    value: 65,
                },
                {
                    label: 1610661600000,
                    value: 49,
                },
                {
                    label: 1610748000000,
                    value: 51,
                },
                {
                    label: 1610834400000,
                    value: 69,
                },
                {
                    label: 1610920800000,
                    value: 61,
                },
                {
                    label: 1611007200000,
                    value: 63,
                },
                {
                    label: 1611093600000,
                    value: 57,
                },
                {
                    label: 1611180000000,
                    value: 61,
                },
                {
                    label: 1611266400000,
                    value: 43,
                },
                {
                    label: 1611352800000,
                    value: 68,
                },
                {
                    label: 1611439200000,
                    value: 69,
                },
                {
                    label: 1611525600000,
                    value: 69,
                },
                {
                    label: 1611612000000,
                    value: 76,
                },
                {
                    label: 1611698400000,
                    value: 61,
                },
                {
                    label: 1611784800000,
                    value: 84,
                },
                {
                    label: 1611871200000,
                    value: 96,
                },
                {
                    label: 1611957600000,
                    value: 97,
                },
                {
                    label: 1612044000000,
                    value: 72,
                },
                {
                    label: 1612130400000,
                    value: 71,
                },
                {
                    label: 1612216800000,
                    value: 88,
                },
                {
                    label: 1612303200000,
                    value: 87,
                },
            ],
        };
        const areaChart = {
            hide: areaHide,
            hideLegend: areaHideLegend,
            hideTooltip: areaHideTooltip,
            zIndex: areaZIndex,
            chart: 'area',
            icon: areaIcon,
            offset: areaOffset,
            gradient: {
                gid: 'ar-grad',
                points: [
                    {
                        offset: 0,
                        stopColor: areaColor_1,
                        stopOpacity: areaColorOpacity_1,
                    },
                    {
                        offset: 95,
                        stopColor: areaColor_2,
                        stopOpacity: areaColorOpacity_2,
                    },
                ],
            },
            properties: {
                name: areaName,
                dataKey: 'a',
                type: areaType,
                stroke: areaStroke,
                dotSettings: {
                    scale: areaScale,
                    initScale: areaInitScale,
                    width: areaWidth,
                    height: areaWidth,
                },
                dot: areaDot,
                strokeWidth: areaStrokeWidth,
            },
            data: [
                {
                    label: 1608242400000,
                    value: 70,
                },
                {
                    label: 1608328800000,
                    value: 40,
                },
                {
                    label: 1608415200000,
                    value: 69,
                },
                {
                    label: 1608501600000,
                    value: 84,
                },
                {
                    label: 1608588000000,
                    value: 29,
                },
                {
                    label: 1608674400000,
                    value: 74,
                },
                {
                    label: 1608760800000,
                    value: 39,
                },
                {
                    label: 1608847200000,
                    value: 74,
                },
                {
                    label: 1608933600000,
                    value: 44,
                },
                {
                    label: 1609020000000,
                    value: 43,
                },
                {
                    label: 1609106400000,
                    value: 57,
                },
                {
                    label: 1609192800000,
                    value: 52,
                },
                {
                    label: 1609279200000,
                    value: 62,
                },
                {
                    label: 1609365600000,
                    value: 74,
                },
                {
                    label: 1609452000000,
                    value: 81,
                },
                {
                    label: 1609538400000,
                    value: 78,
                },
                {
                    label: 1609624800000,
                    value: 91,
                },
                {
                    label: 1609711200000,
                    value: 80,
                },
                {
                    label: 1609797600000,
                    value: 90,
                },
                {
                    label: 1609884000000,
                    value: 80,
                },
                {
                    label: 1609970400000,
                    value: 91,
                },
                {
                    label: 1610056800000,
                    value: 93,
                },
                {
                    label: 1610143200000,
                    value: 72,
                },
                {
                    label: 1610229600000,
                    value: 101,
                },
                {
                    label: 1610316000000,
                    value: 88,
                },
                {
                    label: 1610402400000,
                    value: 110,
                },
                {
                    label: 1610488800000,
                    value: 119,
                },
                {
                    label: 1610575200000,
                    value: 130,
                },
                {
                    label: 1610661600000,
                    value: 98,
                },
                {
                    label: 1610748000000,
                    value: 102,
                },
                {
                    label: 1610834400000,
                    value: 139,
                },
                {
                    label: 1610920800000,
                    value: 123,
                },
                {
                    label: 1611007200000,
                    value: 127,
                },
                {
                    label: 1611093600000,
                    value: 114,
                },
                {
                    label: 1611180000000,
                    value: 123,
                },
                {
                    label: 1611266400000,
                    value: 86,
                },
                {
                    label: 1611352800000,
                    value: 136,
                },
                {
                    label: 1611439200000,
                    value: 139,
                },
                {
                    label: 1611525600000,
                    value: 138,
                },
                {
                    label: 1611612000000,
                    value: 153,
                },
                {
                    label: 1611698400000,
                    value: 122,
                },
                {
                    label: 1611784800000,
                    value: 169,
                },
                {
                    label: 1611871200000,
                    value: 192,
                },
                {
                    label: 1611957600000,
                    value: 195,
                },
                {
                    label: 1612044000000,
                    value: 144,
                },
                {
                    label: 1612130400000,
                    value: 142,
                },
                {
                    label: 1612216800000,
                    value: 176,
                },
                {
                    label: 1612303200000,
                    value: 174,
                },
            ],
        };
        const lineChartOptions = {
            id: 'line-chart',
            composeChart,
            responsiveContainer,
            cartesianGrid,
            xAxis,
            yAxis,
            tooltip,
            legend,
            brush,
            labels: labelsLineChart,
            series: [areaChart],
        };
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ marginBottom: '20px', top: 25, width: '1050px', height: '600px' }}>
                    <Chart
                        id={'line-chart'}
                        composeChart={composeChart}
                        responsiveContainer={responsiveContainer}
                        cartesianGrid={cartesianGrid}
                        xAxis={xAxis}
                        yAxis={yAxis}
                        tooltip={tooltip}
                        legend={legend}
                        brush={brush}
                        labels={labelsLineChart}
                        series={[lineChart, areaChart]}
                    />
                </div>
                <div style={{ width: '500px', height: '600px', overflow: 'auto' }}>
                    <pre>{JSON.stringify(clearData(lineChartOptions), null, 2)}</pre>
                </div>
            </div>
        );
    },
};

export const chart_histogram: Story = {
    name: 'Chart.Histogram',
    render: () => {
        const clearData = (obj) => {
            const copy = JSON.parse(JSON.stringify(obj));
            const labels = ['label', 'label', '...'];
            const series = copy.series.map((item) => {
                item.data = [
                    {
                        label: 'label',
                        value: 'value',
                    },
                    '...',
                ];
                return item;
            });
            return { ...obj, labels, series };
        };
        const orientationVertical = {
            bottom: 'bottom',
            top: 'top',
        };

        const iconTypes = {
            circleLine: 'circleLine',
            filledCircle: 'filledCircle',
            strokeCircle: 'strokeCircle',
            circle: 'circle',
        };
        const responsiveContainerId = 'responsiveContainer';
        const cartesianGridId = 'cartesianGrid';
        const composeChartId = 'composeChart';
        const xAxisId = 'xAxis';
        const yAxisId = 'yAxis';
        const barId = 'bar';
        const debounce = number('debounce', 0, {}, responsiveContainerId);
        const vertical = boolean('vertical', false, cartesianGridId);
        const horizontal = boolean('horizontal', false, cartesianGridId);
        const initMarginTop = number('initMargin.top', 40, {}, composeChartId);
        const initMarginBottom = number('initMargin.bottom', 20, {}, composeChartId);
        const marginLeft = number('initMargin.left', 20, {}, composeChartId);
        const marginRight = number('initMargin.right', 50, {}, composeChartId);
        const barCategoryGap = text('barCategoryGap', '10%', composeChartId);
        const barGap = number('barGap', 4, {}, composeChartId);
        const maxBarSize = number('maxBarSize', 64, {}, composeChartId);
        const xAxisHide = boolean('hide', false, xAxisId);
        const xAxisOrientation = select('orientation', orientationVertical, 'bottom', xAxisId);
        const xAxisTickLine = boolean('tickLine', false, xAxisId);
        const xAxisTickSize = number('tickSize', 6, {}, xAxisId);
        const xAxisTickMargin = number('tickMargin', 10, {}, xAxisId);
        const xAxisMinTickGap = number('minTickGap', 5, {}, xAxisId);
        const xAxisLine = boolean('axisLine', false, xAxisId);
        const yAxisHide = boolean('hide', true, yAxisId);
        const barHideLegend = boolean('hideLegend', false, barId);
        const barHideTooltip = boolean('hideTooltip', false, barId);
        const barZIndex = number('zIndex', 10, {}, barId);
        const barIcon = select('icon', iconTypes, 'circle', barId);
        const barRadius = object(
            'radius',
            {
                top: 10,
                bottom: 10,
            },
            barId,
        );
        const barFormatter = text('labelList.formatter', '', barId);
        const barLabelListOffset = number('labelList.offset', 10, {}, barId);
        const barFill = text('properties.fill', 'var(--color-static-graphic-green-jungle)', barId);
        const barName = text('properties.name', 'приход', barId);
        const responsiveContainer = {
            debounce,
        };
        const cartesianGrid = {
            vertical,
            horizontal,
        };
        const composeChart = {
            initMargin: {
                top: initMarginTop,
                bottom: initMarginBottom,
                left: marginLeft,
                right: marginRight,
            },
            barGap,
            maxBarSize,
            barCategoryGap,
        };
        const xAxis = {
            hide: xAxisHide,
            axisLine: xAxisLine,
            type: 'category',
            allowDecimals: true,
            allowDuplicatedCategory: true,
            interval: 'preserveStartEnd',
            minTickGap: xAxisMinTickGap,
            tickLine: xAxisTickLine,
            tickSize: xAxisTickSize,
            tickMargin: xAxisTickMargin,
            dataKey: 'label',
            orientation: xAxisOrientation,
        };
        const yAxis = {
            hide: yAxisHide,
        };
        const labelsBarChart = [
            'Long label',
            'Label1',
            'Label2',
            'Label3',
            'Label4',
            'Label5',
            'Label6',
            'Label7',
        ];
        const barChart = {
            hide: barHideLegend,
            hideLegend: barHideLegend,
            hideTooltip: barHideTooltip,
            zIndex: barZIndex,
            chart: 'bar',
            icon: barIcon,
            radius: barRadius || 0,
            labelList: {
                formatter: (decimal) => `${decimal}${barFormatter}`,
                offset: barLabelListOffset,
            },
            properties: {
                name: barName,
                dataKey: 'cm',
                formatter: (decimal) => `${decimal * 1000}`,
                fill: barFill,
            },
            data: [
                {
                    label: 'Long label',
                    value: 5000,
                },
                {
                    label: 'Label1',
                    value: 650,
                },
                {
                    label: 'Label2',
                    value: 3522,
                },
                {
                    label: 'Label3',
                    value: 0,
                },
                {
                    label: 'Label4',
                    value: 2000,
                },
                {
                    label: 'Label5',
                    value: 1043,
                },
                {
                    label: 'Label6',
                    value: 600,
                },
                {
                    label: 'Label7',
                    value: 1,
                },
            ],
        };
        const barChartOptions = {
            id: 'bar-chart',
            composeChart,
            responsiveContainer,
            cartesianGrid,
            xAxis,
            yAxis,
            labels: labelsBarChart,
            series: [barChart],
        };
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ marginBottom: '20px', top: 25, width: '1050px', height: '600px' }}>
                    <Chart
                        id='bar-chart'
                        composeChart={composeChart}
                        responsiveContainer={responsiveContainer}
                        cartesianGrid={cartesianGrid}
                        xAxis={xAxis}
                        yAxis={yAxis}
                        labels={labelsBarChart}
                        series={[barChart]}
                    />
                </div>
                <div style={{ width: '500px', height: '600px', overflow: 'auto' }}>
                    <pre>{JSON.stringify(clearData(barChartOptions), null, 2)}</pre>
                </div>
            </div>
        );
    },
};

export default meta;
