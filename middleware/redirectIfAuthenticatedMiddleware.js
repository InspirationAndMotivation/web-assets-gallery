module.exports = (req, res, next) =>{
    if(req.session.userId){
        return res.redirect('/main') // if user logged in, redirect to main page with assets
    }
    next()
}
    