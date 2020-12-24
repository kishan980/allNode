
let appCinfig = {};
appCinfig.port =3001;
appCinfig.allowedCorsOrigin = "*";
appCinfig.env ="dev";
appCinfig.db ={
    uri:'mongodb://127.0.0.1/my_database'
}
appCinfig.apiVersion ='/api/v20';

module.exports ={
    port: appCinfig.port,
    allowedCorsOrigin: appCinfig.allowedCorsOrigin,
    envriment: appCinfig.env,
    db: appCinfig.db,
    apiVersion:   appCinfig.apiVersion
}