var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views')



app.get('/first_template', function(req, res){
    res.render('first_view');
 });

app.listen(3000, () => {
console.log('app running on port 3000')
});