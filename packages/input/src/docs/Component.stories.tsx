import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import { StarMIcon } from '@alfalab/icons-glyph/StarMIcon';
import { Input } from '@balafla/core-components-input';
import { InputMobile } from '@balafla/core-components-input/mobile';
import { InputDesktop } from '@balafla/core-components-input/desktop';
import { DiamondsSIcon } from '@alfalab/icons-glyph/DiamondsSIcon';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    id: 'Input',
};

type Story = StoryObj<typeof Input>;

export const input: Story = {
    name: 'Input',
    render: () => {
        const colors = select('colors', ['default', 'inverted'], 'default');
        const size = select('size', [40, 48, 56, 64, 72], 48);

        const IconComponent = size === 40 ? DiamondsSIcon : StarMIcon;

        return (
            <div
                style={{
                    backgroundColor:
                        colors === 'inverted'
                            ? 'var(--color-light-base-bg-primary-inverted)'
                            : 'transparent',
                    padding: '8px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <Input
                    type={select(
                        'type',
                        ['number', 'card', 'email', 'money', 'password', 'tel', 'text'],
                        'text',
                    )}
                    value={text('value', '')}
                    block={boolean('block', false)}
                    clear={boolean('clear', false)}
                    size={size}
                    colors={colors}
                    disabled={boolean('disabled', false)}
                    placeholder={text('placeholder', '')}
                    label={text('label', '')}
                    labelView={select('labelView', ['inner', 'outer'], 'inner')}
                    hint={text('hint', '')}
                    error={text('error', '')}
                    success={boolean('success', false)}
                    rightAddons={boolean('rightAddons', false) && <IconComponent />}
                    leftAddons={boolean('leftAddons', false) && <IconComponent />}
                    bottomAddons={boolean('bottomAddons', false) && <span>bottom text</span>}
                    readOnly={boolean('readOnly', false)}
                    disableUserInput={boolean('disableUserInput', false)}
                />
            </div>
        );
    },
};

export const input_mobile: Story = {
    name: 'InputMobile',
    render: () => {
        const colors = select('colors', ['default', 'inverted'], 'default');
        const size = select('size', [40, 48, 56, 64, 72], 48);

        const IconComponent = size === 40 ? DiamondsSIcon : StarMIcon;

        return (
            <div
                style={{
                    backgroundColor:
                        colors === 'inverted'
                            ? 'var(--color-light-base-bg-primary-inverted)'
                            : 'transparent',
                    padding: '8px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <InputMobile
                    type={select(
                        'type',
                        ['number', 'card', 'email', 'money', 'password', 'tel', 'text'],
                        'text',
                    )}
                    value={text('value', '')}
                    block={boolean('block', false)}
                    clear={boolean('clear', false)}
                    size={size}
                    colors={colors}
                    disabled={boolean('disabled', false)}
                    placeholder={text('placeholder', '')}
                    label={text('label', '')}
                    labelView={select('labelView', ['inner', 'outer'], 'inner')}
                    hint={text('hint', '')}
                    error={text('error', '')}
                    success={boolean('success', false)}
                    rightAddons={boolean('rightAddons', false) && <IconComponent />}
                    leftAddons={boolean('leftAddons', false) && <IconComponent />}
                    bottomAddons={boolean('bottomAddons', false) && <span>bottom text</span>}
                    readOnly={boolean('readOnly', false)}
                />
            </div>
        );
    },
};

export const input_desktop: Story = {
    name: 'InputDesktop',
    render: () => {
        const colors = select('colors', ['default', 'inverted'], 'default');
        const size = select('size', [40, 48, 56, 64, 72], 48);

        const IconComponent = size === 40 ? DiamondsSIcon : StarMIcon;

        return (
            <div
                style={{
                    backgroundColor:
                        colors === 'inverted'
                            ? 'var(--color-light-base-bg-primary-inverted)'
                            : 'transparent',
                    padding: '8px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <InputDesktop
                    type={select(
                        'type',
                        ['number', 'card', 'email', 'money', 'password', 'tel', 'text'],
                        'text',
                    )}
                    value={text('value', '')}
                    block={boolean('block', false)}
                    clear={boolean('clear', false)}
                    size={size}
                    colors={colors}
                    disabled={boolean('disabled', false)}
                    placeholder={text('placeholder', '')}
                    label={text('label', '')}
                    labelView={select('labelView', ['inner', 'outer'], 'inner')}
                    hint={text('hint', '')}
                    error={text('error', '')}
                    success={boolean('success', false)}
                    rightAddons={boolean('rightAddons', false) && <IconComponent />}
                    leftAddons={boolean('leftAddons', false) && <IconComponent />}
                    bottomAddons={boolean('bottomAddons', false) && <span>bottom text</span>}
                    readOnly={boolean('readOnly', false)}
                />
            </div>
        );
    },
};

export default meta;
