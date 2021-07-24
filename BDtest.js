//users data
/*const mongoose = require('mongoose')
const UserData = require('./models/UserData')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

UserData.create({
    login: 'admin',
    password: 'admin'
}, (error, userdata) =>{
    console.log(error, userdata)
})
*/


//assets gallery data 
/*
const mongoose = require('mongoose')
const AssetPost = require('./models/AssetPost')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

AssetPost.create({
    title: 'mp_m_freemode_01_head_045',
    category: 'head',
    description: 'Head',
    image: '/img/mp_m_freemode_01_male_apt01_teef_003.png'
}, (error, assetpost) =>{
    console.log(error, assetpost)
})

AssetPost.create({
    title: 'mp_m_freemode_01_male_apt01_task_000',
    category: 'accessory',
    description: 'Some part',
    image: '/img/mp_m_freemode_01_male_apt01_task_000.png'
}, (error, assetpost) =>{
    console.log(error, assetpost)
})

AssetPost.create({
    title: 'mp_m_freemode_01_male_apt01_teef_003',
    category: 'accessory',
    description: 'Tie',
    image: '/img/mp_m_freemode_01_male_apt01_teef_003.png'
}, (error, assetpost) =>{
    console.log(error, assetpost)
})
*/