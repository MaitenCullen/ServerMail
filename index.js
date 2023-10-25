const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser =require('body-parser');
const http = require('http')


app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extend:false}));
app.use(require('./routes/mailRoutes'))

function requestController(req, res){
    console.log('hola')
    res.send('hola nodejs')
}
const server = http.createServer(requestController)
const PORT = process.env.PORT || '80';

app.listen(PORT, ()=> {
    console.log('escuchando' + PORT)
})
