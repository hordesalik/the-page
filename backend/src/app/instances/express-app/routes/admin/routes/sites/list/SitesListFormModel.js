import { FormModel } from '../../../../../../../components/form/formModel.js';
import { DropdownFormFieldModel } from '../../../../../../../components/form/fields/DropdownFormFieldModel.js';

export class SitesListFormModel extends FormModel {
    // there is an issue, accountIdDropdownFormField still undefined after form initialized if the field is specified
    // accountIdDropdownFormField = null;

    init() {
        super.init();

        this.accountIdDropdownFormField = new DropdownFormFieldModel(this, {
            name: 'accountId',
            htmlLabel: 'Account',
            emptyOptionTitle: 'Select an Account...',
            htmlLabelClass: 'col-form-label',
        });

        this.addField(this.accountIdDropdownFormField);
    }
}
