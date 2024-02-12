const {request,response} = require('express');
const nodeMailer = require('nodemailer');

const sendEmail = (req=request, resp=response) => {

    let body = req.body;
    let email = process.env.EMAIL; 

    let config = nodeMailer.createTransport({
        host:'c2172200.ferozo.com',
        port:465,
        auth:{
            user:email,
            pass:process.env.PASSWORD
        }

    })
    const emailBody = `
    Nombre: ${body.nombre}
    \n
    Empresa/Ciudad/provincia: ${body.empresa}
    \n
    Teléfono: ${body.telefono}
    \n
    Mensaje: ${body.mensaje}
    \n
  `;

const options ={
    from: body.email,
    subject: body.empresa,
    to: email,
    nombre: body.nombre,
    telefono: body.telefono, 
    text: emailBody
};
config.sendMail(options,function(error, result){
    if (error) return resp.json({ok:false, msg:error});
    return resp.json({
        ok:true,
        msg:result
    });
    })
};

module.exports = {
    sendEmail
}