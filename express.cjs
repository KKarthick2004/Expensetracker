const express=require("express")


const app=express()
app.get('/', function(request,response){
    response.send("Welcome.....")
})                          //   /--> home page url

app.get('/Fsd', function(request,response){
    response.send("developers")
})   
app.listen(8000)