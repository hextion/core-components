import { Story } from '@storybook/addon-docs';
import { number, text, boolean } from '@storybook/addon-knobs';

import { PassCode, KeyPadButton } from '@balafla/core-components-pass-code';
import { SfFaceIdXxlIcon } from '@alfalab/icons-glyph/SfFaceIdXxlIcon';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof PassCode> = {
    title: 'Components/PassCode',
    component: PassCode,
    id: 'PassCode',
};

type Story = StoryObj<typeof PassCode>;

export const pass_code: Story = {
    name: 'PassCode',
    render: () => {
        const codeLength = number('codeLength', 0, { min: 0, max: 12, range: true });

        return (
            <div style={{ height: '100vh' }}>
                <PassCode
                    value={text('value', '')}
                    onChange={() => {}}
                    maxCodeLength={number('maxCodeLength', 8, { min: 0, max: 12, range: true })}
                    codeLength={codeLength === 0 ? undefined : codeLength}
                    error={boolean('error', false)}
                    success={boolean('success', false)}
                    disabled={boolean('disabled', false)}
                    leftAddons={
                        boolean('leftAddons', false) && (
                            <KeyPadButton view='text' key='left-addon'>
                                Забыли код?
                            </KeyPadButton>
                        )
                    }
                    rightAddons={
                        boolean('rightAddons', false) && (
                            <KeyPadButton view='text' key='right-addon'>
                                <SfFaceIdXxlIcon />
                            </KeyPadButton>
                        )
                    }
                />
            </div>
        );
    },
};

export default meta;
