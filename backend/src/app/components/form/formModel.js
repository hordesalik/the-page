export class FormModel {
    values;
    error;
    errorDetails;
    fields = [];
    fieldsMap = new Map();

    constructor(...sources) {
        this.values = sources?.length ? Object.assign.apply({}, sources): {};
        this.init();
    }

    init() {

    }

    addField(field) {
        this.fields.push(field);
        this.fieldsMap.set(field.name, field);
    }

    addFields(fields) {
        fields.forEach(field => this.addField(field));
    }

    getFieldByName(name) {
        return this.fieldsMap.get(name);
    }
}
