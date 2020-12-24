let appConfig = {};
appConfig.port = 1452;
appConfig.allowedCorsOrigin ="*";
appConfig.env = "dev";
appConfig.db = {
    // uri:"mongodb+srv://kishan:K#1kyadav@cluster0.fpioa.mongodb.net/shoping?retryWrites=true&w=majority",
    uri:"mongodb://127.0.0.1:27017/Shoping"
}
appConfig.apiVersion = "/api/v1";


module.exports ={
    port:appConfig.port,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    envriment:appConfig.env,
    db:appConfig.db,
    apiVersion: appConfig.apiVersion

}