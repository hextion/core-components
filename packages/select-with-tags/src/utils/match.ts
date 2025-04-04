import { GroupShape, isGroup, OptionShape } from '@balafla/core-components-select/shared';

import { OptionMatcher, SelectWithTagsProps } from '../types';

const defaultMatch: OptionMatcher = (option, inputValue) =>
    option.value.toLowerCase().indexOf((inputValue || '').toLowerCase(), 0) !== -1;

const optionsIsGroupShapes = (options: SelectWithTagsProps['options']): options is GroupShape[] => {
    const item = options[0];

    if (!item) {
        return false;
    }

    return isGroup(item);
};

export const filterOptions = (
    options: SelectWithTagsProps['options'],
    inputValue: string,
    math = defaultMatch,
) => {
    if (optionsIsGroupShapes(options)) {
        return options.reduce<GroupShape[]>((acc, group) => {
            const matchedOptions = group.options.filter((option) => math(option, inputValue));

            if (matchedOptions.length > 0) {
                acc.push({ ...group, options: matchedOptions });

                return acc;
            }

            return acc;
        }, []);
    }

    return (options as OptionShape[]).filter((option) => math(option, inputValue));
};
