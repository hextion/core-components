import React, { forwardRef } from 'react';

import { useIsDesktop } from '@alfalab/core-components-mq';

import { PassCodeDesktop } from './desktop/PassCodeDesktop';
import { PassCodeMobile } from './mobile/PassCodeMobile';
import { PassCodeProps } from './typings';

export const PassCode = forwardRef<HTMLDivElement, PassCodeProps>(
    (
        {
            breakpoint,
            client,
            defaultMatchMediaValue = client === undefined ? undefined : client === 'desktop',
            ...restProps
        },
        ref,
    ) => {
        const isDesktop = useIsDesktop(breakpoint, defaultMatchMediaValue);

        const Component = isDesktop ? PassCodeDesktop : PassCodeMobile;

        return <Component ref={ref} {...restProps} />;
    },
);
