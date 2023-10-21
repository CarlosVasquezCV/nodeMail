const nodemailer = require("nodemailer");

enviarMail = ()=> {
    const config = {
        host: 'smtp.gmail.com',
        port: '587',
        auth: {
            user: 'carlos.vasquez180@misena.edu.co',
            pass: 'chac zmee swlv anjf'
        }
    }

    const mensaje = {
        from: 'carlos.vasquez180@soy.sena.edu.co',
        to: ['jdespitia@sena.edu.co','jmgonzalez261@misena.edu.co', 'carlos.vasquez180@soy.sena.edu.co'],
        subject: 'correo de prueba',
        text: 'Hola, como estás?'
    }

    const transport = nodemailer.createTransport(config);

    const info = transport.sendMail(mensaje);

    console.log(info);


}

enviarMail();