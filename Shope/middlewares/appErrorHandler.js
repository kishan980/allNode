const response = require("./../library/responseLib");
let errorHandler = (err, req,res, next)=>{
    console.log("application Error handler Called");
    console.log(err);
    let apiResponse = response.generate(true, "Same error occured at globale level");
    // res.send("Some error occured at globale level");
    res.send(apiResponse);
}

let notFoundHandler = (req,res,next) =>{
    console.log("Globle not found handler called");
    let apiResponse = response.generate(true, "Route not found in the application", 404, null);
    res.status(404).send(apiResponse);
    // res.status(404).send("Route not found in the application");
}

module.exports = {
    globleErrorhandler: errorHandler,
    globleNotFoundHandler: notFoundHandler
}