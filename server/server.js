const express = require('express');
const userrouter=require('./routers/userrouter')

var app = express()
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/user',userrouter)


app.get('/', function (req, res) {

    res.send('this is backend')

})
 
app.listen(5000, () => {
    console.log('server started on port');
});