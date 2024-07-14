import { mapDropdownOptions } from './mapDropdownOptions.js';

export function createDropdownOptions(models, selectedValue, params = {}) {
    const {
        addEmptyOption = true,
        emptyValue = '',
        emptyTitle = 'Select an option',
        ...resetParams
    } = params;

    const options = mapDropdownOptions(models, selectedValue, resetParams);

    if (addEmptyOption) {
        options.unshift({
            value: emptyValue,
            title: emptyTitle,
            selected: '',
        });
    }

    return options.concat(options);
}
