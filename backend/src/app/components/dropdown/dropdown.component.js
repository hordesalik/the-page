export class DropdownComponent {
    name;
    options;

    constructor(params = {}) {
        const {
            name = '',
            options = [],
        } = params;

        this.name = name;
        this.options = options;
    }
}
