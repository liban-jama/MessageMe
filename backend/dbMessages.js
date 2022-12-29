import mongoose from 'mongoose';

const whatsAppSchema = mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String,
    received: Boolean
});

const messagesModel = mongoose.model('messagecontents', whatsAppSchema);

export default messagesModel