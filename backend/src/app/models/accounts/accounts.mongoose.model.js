import { mongooseInstance } from '../../instances/mongoose/mongoose.instance.js';

const {mongoose} = mongooseInstance;

const accountsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    ownerUserId: {
        type: String,
        index: true,
    },
});

export const accountsMongooseModel = mongoose.model('Account', accountsSchema);
