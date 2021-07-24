const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AssetPostSchema = new Schema({
    title: { type: String, require: true },
    category: { type: String, require: false },
    description: { type: String, require: false },
    image: {type: String, require: true}
});

const AssetPost = mongoose.model('AssetPost', AssetPostSchema);
module.exports = AssetPost

