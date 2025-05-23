import React, { forwardRef } from 'react';
import { FormControlDesktop } from '@balafla/core-components-form-control/desktop';

import { BaseInput, BaseInputProps } from '../components/base-input';

export type InputDesktopProps = Omit<BaseInputProps, 'FormControlComponent'>;

export const InputDesktop = forwardRef<HTMLInputElement, InputDesktopProps>((restProps, ref) => (
    <BaseInput {...restProps} FormControlComponent={FormControlDesktop} ref={ref} />
));
