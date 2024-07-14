import { FormFieldModel } from '../formFieldModel.js';

export class DropdownFormFieldModel extends FormFieldModel {
    emptyOptionShow;
    emptyOptionValue;
    emptyOptionTitle;
    options;

    constructor(form, params = {}) {
        const {
            emptyOptionShow = true,
            emptyOptionValue = '',
            emptyOptionTitle = 'Select an Option...',
            options = [],
            ...presetParams
        } = params;

        const superParams = {
            ...presetParams,
            type: 'dropdown',
        };

        super(form, superParams);

        this.emptyOptionShow = emptyOptionShow;
        this.emptyOptionValue = emptyOptionValue;
        this.emptyOptionTitle = emptyOptionTitle;
        this.options = options;
    }
}
