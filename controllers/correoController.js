const {request,response} = require('express');
const nodeMailer = require('nodemailer');

const sendEmail = (req=request, resp=response) => {

    let body = req.body;
    let email = 'info@diagnostico9dejulio.com.ar';

    let config = nodeMailer.createTransport({
        host:'c2172200.ferozo.com',
        port:465,
        auth:{
            user:'info@diagnostico9dejulio.com.ar',
            pass:'Reig87Tar/'
        }

    })
    const emailBody = `
    Nombre: ${body.nombre}
    <br>
    Empresa: ${body.empresa}
    <br>
    Teléfono: ${body.telefono}
    <br>
    Mensaje: ${body.mensaje}
  `;

const options ={
    from: body.email,
    subject: body.empresa,
    to: email,
    nombre: body.nombre,
    tel: body.telefono, 
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