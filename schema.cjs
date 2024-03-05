const mongoose = require("mongoose")

const expenseTrackerSchema=new mongoose.Schema({
    amount:{
        type:Number
    },
    category:{
      type:String
    },
    date:{
        type:String
    }
})

const Expense =mongoose.model("ExpenseDetail",expenseTrackerSchema)   //(collection_name,schema_name)
module.exports={Expense}