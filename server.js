var express = require('express'),
    app = express();
    
function reqprocessor_ex(req,res){
    res.send('<h3>Hail Cats!</h3>');
}   

app.get('/',reqprocessor_ex);
app.use(express.static('public'));

app.listen(process.env.PORT || 8080);
