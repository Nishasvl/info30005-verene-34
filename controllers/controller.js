const html_dir = '/../public/html';

module.exports = {
    displayPage : function(req, res){
        res.sendFile('welcomepage.html', {root: __dirname + html_dir});
    }
};
