import { FormModel } from '../../../../../../../components/form/formModel.js';
import { FormFieldModel } from '../../../../../../../components/form/formFieldModel.js';

export class SiteEditFormModel extends FormModel {
    init() {
        super.init();

        this.addField(new FormFieldModel(this, {
            name: 'name',
            type: 'text',
            htmlLabel: 'Site Name',
        }));
    }
}
