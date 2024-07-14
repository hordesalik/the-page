import { FormModel } from '../../../../../../../../../components/form/formModel.js';
import { FormFieldModel } from '../../../../../../../../../components/form/formFieldModel.js';

export class SitePageCreateFormModel extends FormModel {
    init() {
        super.init();

        this.addField(new FormFieldModel(this, {
            name: 'name',
            type: 'text',
            htmlLabel: 'Site Page Name',
        }));
    }
}
