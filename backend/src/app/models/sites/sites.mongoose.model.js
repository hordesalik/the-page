import { mongooseInstance } from '../../instances/mongoose/mongoose.instance.js';

const {mongoose} = mongooseInstance;

const sitesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    accountId: {
        type: String,
        required: true,
        index: true,
    },
});

export const sitesMongooseModel = mongoose.model('Site', sitesSchema);
