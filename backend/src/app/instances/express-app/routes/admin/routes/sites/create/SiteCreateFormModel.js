import { FormModel } from '../../../../../../../components/form/formModel.js';
import { FormFieldModel } from '../../../../../../../components/form/formFieldModel.js';
import { DropdownFormFieldModel } from '../../../../../../../components/form/fields/DropdownFormFieldModel.js';

export class SiteCreateFormModel extends FormModel {
    init() {
        super.init();

        this.addField(new DropdownFormFieldModel(this, {
            name: 'accountId',
            htmlLabel: 'Account',
            emptyOptionTitle: 'Select an Account...',
        }));

        this.addField(new FormFieldModel(this, {
            name: 'name',
            type: 'text',
            htmlLabel: 'Site Name',
        }));
    }
}
