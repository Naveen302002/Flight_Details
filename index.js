const express=require('express');
const app=express();
const https=require('https');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.listen('3000',function(){
    console.log("Server started at 3000");
})
app.get("/",function(req,res)
{
    res.sendFile(__dirname+'/index.html');
})
app.post("/",function(req,res)
{
    const apiId="064c476898f31aa8b42ca92eb8ccdb90";
    console.log(req.body.depCity);
    const url="https://api.aviationstack.com/v1/flights?access_key="+apiId;
    https.get(url,function(response)
    {
        response.on("data",function(data)
        {
            const flightData=JSON.parse(data);
            console.log(flightData);
            res.send();
        })
    })
})