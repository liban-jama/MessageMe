import mongoose from 'mongoose';

const messageMeSchema = mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String,
    received: Boolean
});

const messagesModel = mongoose.model('messagecontents', messageMeSchema);

export default messagesModel