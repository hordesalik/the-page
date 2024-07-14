import fs from 'fs';
import mongoose from 'mongoose';

export const mongooseInstance = {
    mongoose,
    connect: () => {
        mongoose.connection.once('open', () => {
            console.log('Mongoose connected');
        });

        mongoose.connection.on('error', (e) => {
            console.log('Mongoose error', e);
        });

        const MONGO_URI = fs.readFileSync(process.env.MONGO_URI_FILE, 'utf8');

        return mongoose.connect(MONGO_URI);
    }
};

