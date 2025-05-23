import { getDataTestId } from '@balafla/core-components-shared';

import { Theme, ThemeParams } from '@alfalab/react-canvas-pattern-lock';

import { OBSERVABLE_TOKENS, THEME_STATE } from './consts';

export function getDefaultObserveTarget() {
    return document.head;
}

export function getColorByToken(token: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(token);
}

export const getSizes = (() => {
    const COMMON_SIZES = {
        lineWidth: 6,
        nodeRing: 0,
        nodeCore: 12,
    };

    let cachedSize: { elementSizes: ThemeParams['dimens']; width: number; height: number };

    return () => {
        if (cachedSize) {
            return cachedSize;
        }

        cachedSize = {
            elementSizes: { ...COMMON_SIZES, nodeRadius: 32 },
            width: 240,
            height: 240,
        };

        return cachedSize;
    };
})();

export function getTheme(dimens: ThemeParams['dimens']): Theme {
    const baseColors = {
        primary: getColorByToken(OBSERVABLE_TOKENS.PRIMARY),
        bg: 'transparent',
        ringBg: getColorByToken(OBSERVABLE_TOKENS.RING_BG_INITIAL),
        hover: {
            inner: getColorByToken(OBSERVABLE_TOKENS.HOVER_INNER),
            outer: getColorByToken(OBSERVABLE_TOKENS.HOVER_OUTER),
        },
    };

    return {
        [THEME_STATE.INITIAL]: {
            colors: {
                ...baseColors,
                accent: getColorByToken(OBSERVABLE_TOKENS.ACCENT_INITIAL),
                selectedRingBg: getColorByToken(OBSERVABLE_TOKENS.SELECTED_RING_BG_INITIAL),
            },
            dimens,
        },
        [THEME_STATE.SUCCESS]: {
            colors: {
                ...baseColors,
                accent: getColorByToken(OBSERVABLE_TOKENS.ACCENT_SUCCESS),
                selectedRingBg: getColorByToken(OBSERVABLE_TOKENS.SELECTED_RING_BG_SUCCESS),
            },
            dimens,
        },
        [THEME_STATE.FAILURE]: {
            colors: {
                ...baseColors,
                accent: getColorByToken(OBSERVABLE_TOKENS.ACCENT_FAILURE),
                selectedRingBg: getColorByToken(OBSERVABLE_TOKENS.SELECTED_RING_BG_FAILURE),
            },
            dimens,
        },
    };
}

export function getPatternLockTestIds(dataTestId: string) {
    return {
        patternLock: dataTestId,
        forgotCodeBtn: getDataTestId(dataTestId, 'forgot-code-btn'),
    };
}
