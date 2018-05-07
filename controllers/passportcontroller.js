const html_dir = '/../public/html';



module.exports = {
    displayLogin : function(req, res){
        res.sendFile('login.html', {root: __dirname + html_dir});
    },

    displayHome: function(req, res){
        //res.render('home', { user: req.user });
        res.sendFile('home.html', {root: __dirname + html_dir});
    },

    displayWelcomeorHome: function(req,res){
        if (req.isAuthenticated()){
            res.redirect('/home')
        }else{
            res.sendFile('welcomepage.html', {root: __dirname + html_dir});
        }
    },

    logoutUser: function(req, res) {
        req.logout();
        res.redirect('/');
    }







}