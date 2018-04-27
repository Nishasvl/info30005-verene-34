const express = require('express');
const app = express();


// Database set up
require('./models/db.js');


const router = require('./routes/routes.js');
app.use(router);


const PORT = process.env.PORT || 3020;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});

app.use(express.static('public'));

app.set('view engine', 'ejs');





