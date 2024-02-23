const bodyParser = require('body-parser');

module.exports = function(app){
    let apiRoutes = require('../Router/routes');
    let apiVersion = 'v1';

    app.get('/',(req,res)=> res.send('Hola Alvaro'));
    app.use('/'+apiVersion,apiRoutes);
    InitApp(app);
}

function InitApp(app){
    const PORT = process.env.PORT || 3050;
    //vista de la APP CbitBank
    app.use(bodyParser.json());
    app.listen(PORT,()=> console.log(`server corriendo en el puerto: ${PORT}`));
}