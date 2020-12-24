 let appConfig = {};

 appConfig.port =3002;
 appConfig.allowedCorsOrigin = "*";
 appConfig.evn ="dev";
 appConfig.db ={
    uri:""
 }

 appConfig.apiVersion = '/api/a1';

 module.exports ={
     port: appConfig.port,
     allowedCorsOrigin: appConfig.allowedCorsOrigin,
     envriment: appConfig.envriment,
     db: appConfig.db,
     apiVersion: appConfig.apiVersion
 }
 