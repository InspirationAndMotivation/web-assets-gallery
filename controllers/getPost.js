//not using now, one of possibility to get instance of posts
const AssetPost = require('../models/AssetPost.js')

module.exports = async (req,res)=>{
    const assetposts = await AssetPost.findById(req.params.id)
    async: true;
    console.log(assetpost)
    res.render('post',{
        assetpost
    });
}