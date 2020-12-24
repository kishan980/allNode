var hello = (req,res) =>res.send("hello");
var data = (req,res) => res.send("data");

module.exports ={
    hello:hello,
    data: data
}