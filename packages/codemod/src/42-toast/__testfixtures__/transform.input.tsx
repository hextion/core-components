/* eslint-disable */
import React from 'react';

import { Toast, ToastProps } from '@balafla/core-components/toast';

const noop = () => {};

export const Component = () => {
    return (
        <React.Fragment>
            <Toast open={false} onClose={noop}/>
        </React.Fragment>
    );
};
