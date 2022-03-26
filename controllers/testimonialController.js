const guardarTestimonial = (req, res) => {

    //validar form
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({ mensaje: 'El nombre esta vacio'});
    }

    if(correo.trim() === ''){
        errores.push({ mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim() === ''){
        errores.push({ mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length > 0){
        //mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        });
    }else{
        //almacenar en la base de datos
    }

}

export {
    guardarTestimonial
}