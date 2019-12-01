const express=require("express")
const app =express()
const bodyparser=require("body-parser")
const routerProduct=require("./routes/product")
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyparser.json())
app.use("/product",routerProduct)

app.get("/",(request,response)=>{
    response.send("welcome to  my backened")
})

app.listen(9898,()=>{
    console.log("server started ....")
})