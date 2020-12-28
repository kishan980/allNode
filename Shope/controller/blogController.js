var hello = (req,res)=> res.send("hii");
var printData = (req,res) => res.send("okey");

let testQuery = (req,res) =>{
    console.log(req.query);
    res.send(req.query);
}

let testBody = (req,res) =>{
    console.log(req.body);
    res.send(req.body);
}

let testParams = (req,res) =>{
    console.log(req.params);
    res.send(req.params);

}

module.exports ={
    hello:hello,    
    printData:printData,
    testQuery:testQuery,
    testBody:testBody,
    testQuery:testParams
}