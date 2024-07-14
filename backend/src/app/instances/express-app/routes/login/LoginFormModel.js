import { FormModel } from '../../../../components/form/formModel.js';
import { FormFieldModel } from '../../../../components/form/formFieldModel.js';

export class LoginFormModel extends FormModel {
    init() {
        super.init();

        this.addField(new FormFieldModel(this, {
            name: 'username',
            type: 'text',
            htmlLabel: 'Username',
        }));

        this.addField(new FormFieldModel(this, {
            name: 'password',
            type: 'password',
            htmlLabel: 'Password',
        }));
    }
}
