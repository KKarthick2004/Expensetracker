const express=require("express")
const app=express()
const mongo=require("mongoose")
const {Expense}=require("./schema.cjs")
const bodyParser=require("body-parser")


async function connectToDb(){
  try{
     await mongo.connect("mongodb+srv://karthick:Karthick2004@cluster0.bn3vm7i.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0")
     app.listen(8093,()=>console.log("port activated"))
  }
  catch(err){
     console.log(err)
     console.log("Could not connect the db")
  }
}
connectToDb()


app.use(bodyParser.json())

app.post("/add-Expense",async (request,response)=>{
     try{
      await Expense.create({
        "amount":request.body.amount,
        "category":request.body.category,
        "date":request.body.date
         
      })
      response.status(201).json({
        status:"success"
      })
     }
     catch(err){
        response.status(404).json({
          "status":"Failed to add data"
        })   
     }
    }
)
     
     app.get('/get-Expense',async (request,response)=>{
          try{
           const data=await Expense.find()
           response.status(201).json(data)
          }
          catch(err){
            console.log(err)
          }
     })

      

    
     app.delete("/delete-expense/:id",async (request,response)=>{
             const data= await Expense.findById(request.params.id)
             if(data){
              await Expense.findByIdAndDelete(request.params.id)
              response.status(201).json({
                "status":"deleted"
               })
             }
             else{
             response.status(404).json({
                "status":"File could not find"
               })
             }

     })

    
     app.patch('/edit-expense/:id', async function(request, response) {
      try {
          const expenseEntry = await Expense.findById(request.params.id)
          if(expenseEntry) {
              await expenseEntry.updateOne({
                  "amount" : request.body.amount,
                  "category" : request.body.category,
                  "date" : request.body.date
              })
              response.status(200).json({
                  "status" : "success",
                  "message" : "updated entry"
              })
          } else {
              response.status(404).json({
                  "status" : "failure",
                  "message" : "could not find entry"
              })
          }
      } catch(error) {
          response.status(500).json({
              "status" : "failure",
              "message" : "could not delete entry",
              "error" : error
          })
      }
  })