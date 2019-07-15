var express = require('express');
var app = express();

var things =  require('./things');

app.use((req, res, next) => {
console.log('first middleware')
next()
})
app.use('/things', things);

app.use('/things', (req,res, next) => {
    console.log('end')
})

app.listen(3000, () => {
console.log('app running on port 3000')
});