const AssetPost = require('../models/AssetPost.js')

module.exports = async (req, res) =>{
    const assetposts = await AssetPost.find({})
    async: true;
    res.render('main', {
        assetposts
    });
}
    
