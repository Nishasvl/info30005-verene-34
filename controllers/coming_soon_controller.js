const html_dir = '/../public/html';

module.exports = {
    displayPage : function(req, res){
        res.sendFile('comingsoon.html', {root: __dirname + html_dir});
    }
};
