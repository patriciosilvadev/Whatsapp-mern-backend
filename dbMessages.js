import mongoose from 'mongoose';

const whatsappSchema = mongoose.Schema({
    name: String,
    message: String,
    timestamp: String,
    recieved: Boolean,
});

export default mongoose.model('messagecontents', whatsappSchema)