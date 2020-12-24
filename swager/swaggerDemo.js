const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 5000;

const swaggerOptions = {
    swaggerDefinition: {
    info: {
        title: 'Customer API',
        description: 'Customer API Information',
        contact:{
            name:  "Amazing Developer"
        },
        servers:['http://localhost:5000']
    }
},
    apis: ["swaggerDemo.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes 
/**
 * @swagger
 * /customerView:
 *  get:
 *      description: Use to request all customer
 *      responses:
 *          '200':
 *           description: successfull response 
 */

app.get('/customerView',(req,res)=>{
    res.send("Customer result");
});

//Routes 
/**
 * @swagger
 * /customerUpdate:
 *  put:
 *      description: Use update customer
 *      responses:
 *          '200':
 *           description: successfull response 
 */

//Routes 
/**
 * @swagger
 * /customerAdd:
 *  post:
 *      description: add Customers Details
 *      responses:
 *          '200':
 *           description: successfull response 
 */
//Routes 
/**
 * @swagger
 * /customerDelete:
 *  get:
 *      description: Delete Customer succesFully
 *      responses:
 *          '200':
 *           description: successfull response 
 */

app.put('/customerUpdate', (req,res)=>{
    res.send("Update Successfully");
});

app.post('/customerAdd', (req,res)=>{
    res.send("add Data");
})

app.get('/customerDelete', (req,res)=>{
    res.send("delete customer succefully");
});

app.listen(port, ()=>{
 console.log("server is runing okey...");
});