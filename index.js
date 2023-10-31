const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser =require('body-parser');
const https = require('https');
const PORT = process.env.PORT || '80';

app.use(cors({
    origin:'*',
    Methods:['POST', 'GET', 'OPTIONS']
}));
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
const server = https.createServer(requestController)
app.get("/", (req, res) => {
    const htmlResponse = `
    <html>
        <head>
            <title>Probando</title>
        </head>
        <body>
            <h1>Hola</h1>
        </body>
    </html>
    `;
    res.send(htmlResponse);
})
app.listen(PORT, ()=> {
    console.log('escuchando' + PORT)
})
