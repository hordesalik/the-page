import { mongooseInstance } from '../../instances/mongoose/mongoose.instance.js';

const {mongoose} = mongooseInstance;

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    passwordHash: {
        type: String,
        required: false,
    },
});

export const usersMongooseModel = mongoose.model('User', usersSchema);
