const AssetPost = require('../models/AssetPost.js')
const { body,validationResult } = require('express-validator');
const path = require('path')

module.exports = (req,res)=>{
let image = req.files.image;
    image.mv(path.resolve(__dirname,'..','public/img',image.name),async (error)=>{
        await AssetPost.create({
            ...req.body,
            image: '/img/' + image.name
        })
        res.redirect('/main')
    })
}
/*
module.exports = ([
    body('title').isLength({ min: 5 }).trim().withMessage('Название отсутствует.'),
    body('description').isAlpha().withMessage('Описание должно содержать буквы алфавита.')
], (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
        return res.redirect('/assets/new');
}
    let image = req.files.image;
        image.mv(path.resolve(__dirname, 'public/img', image.name), 
        async (error)=>{
            await AssetPost.create({
                ...req.body,
                image: '/img/'+image.name
            })
            res.redirect('/main')        
        })
});
*/