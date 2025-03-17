import { detect } from 'detect-browser';

import { isClient } from './isClient';

const getScrollbarSize = (() => {
    let cachedSize: number;

    return () => {
        if (cachedSize !== undefined) return cachedSize;
        if (!isClient()) return 0;

        const scrollDiv = document.createElement('div');

        scrollDiv.style.width = '99px';
        scrollDiv.style.height = '99px';
        scrollDiv.style.position = 'absolute';
        scrollDiv.style.top = '-9999px';
        scrollDiv.style.overflow = 'scroll';

        document.body.appendChild(scrollDiv);
        const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;

        document.body.removeChild(scrollDiv);

        cachedSize = scrollbarSize;

        return scrollbarSize;
    };
})();

function isWebkitBased() {
    if (!isClient()) return false;

    return window.navigator.userAgent.toLowerCase().indexOf('webkit') > -1;
}

function isSafari(): boolean {
    if (isClient()) {
        const detectBrowser = detect();

        if (detectBrowser) {
            return detectBrowser.name === 'safari';
        }
    }

    return false;
}

export const browser = {
    getScrollbarSize,
    isWebkitBased,
    isSafari,
};

export {
    getScrollbarSize as browserGetScrollbarSize,
    isWebkitBased as browserIsWebkitBased,
    isSafari as browserIsSafari,
};
