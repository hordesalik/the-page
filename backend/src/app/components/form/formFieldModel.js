export class FormFieldModel {
    form;
    name;
    type;
    params;

    constructor(form, params = {}) {
        this.form = form;

        const { name, type, ...restParams } = params;

        this.name = name;
        this.type = type;
        this.params = restParams;
    }

    get htmlValue() {
        return this.form.values[this.name];
    }

    get htmlLabel() {
        return this.params.htmlLabel || this.name;
    }

    get htmlLabelClass() {
        return 'htmlLabelClass' in this.params
            ? this.params.htmlLabelClass
            : 'form-label';
    }

    get htmlId() {
        return this.params.htmlId || this.name;
    }

    get htmlName() {
        return this.params.htmlName || this.name;
    }

    get htmlType() {
        return this.params.htmlType || this.type;
    }

    get isDropdown() {
        return this.type === 'dropdown';
    }

    get isTextarea() {
        return this.type === 'textarea';
    }

    get isInput() {
        return !this.isDropdown
            && !this.isTextarea;
    }
}
