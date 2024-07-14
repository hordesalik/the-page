import { FormModel } from '../../../../../../../../../components/form/formModel.js';
import { FormFieldModel } from '../../../../../../../../../components/form/formFieldModel.js';

export class SitePageEditFormModel extends FormModel {
    init() {
        super.init();

        this.addField(new FormFieldModel(this, {
            name: 'name',
            type: 'text',
            htmlLabel: 'Site Page Name',
        }));

        this.addField(new FormFieldModel(this, {
            name: 'uri',
            type: 'text',
            htmlLabel: 'Site Page Uri',
        }));

        this.addField(new FormFieldModel(this, {
            name: 'htmlBody',
            type: 'textarea',
            htmlLabel: 'Site Page Html Body',
        }));
    }
}
