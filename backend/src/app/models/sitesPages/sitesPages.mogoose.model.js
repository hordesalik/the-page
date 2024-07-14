import { mongooseInstance } from '../../instances/mongoose/mongoose.instance.js';

const { mongoose } = mongooseInstance;

const sitePageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    siteId: {
        type: String,
        required: true,
        index: true,
    },
    uri: {
        type: String,
        index: true,
    },
    htmlBody: {
        type: String,
    },
});

export const sitesPagesMongooseModel = mongoose.model('SitePage', sitePageSchema);
