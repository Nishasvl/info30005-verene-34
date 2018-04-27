const html_dir = '/../public/html';

module.exports = {
    displayPage : function(req, res){
        res.sendFile('welcomepage.html', {root: __dirname + html_dir});
    }
};

// from lecture
// var createUser = function(req,res){
//     var user = new User ({
//         "name":req.body.name
//     });
//     cafe.save(function(err,newUser){
//         if(!err){
//             res.send(newUser);
//         }else{
//             res.sendStatus(400);
//         }
//     });
// };