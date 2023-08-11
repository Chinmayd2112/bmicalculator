const x=require("express");
const bodyparser=require("body-parser");
const app=x();
app.use(bodyparser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("hello, local host is at port 500 ");

});
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator",function(req,res){
    var n1=Number(req.body.weight);
    var n2 =Number(req.body.height);
    var result=n1/n2;
    res.send("happy to visit here,your addition is "+ result);
});
