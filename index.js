import express from 'express';
import router from './routes/index.js';

const app = express();

//definir puerto
const port = process.env.PORT || 4000;

//habilitando pug
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    return next();
})

//definir la carpeta publica
app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});