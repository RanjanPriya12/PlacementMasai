var mongoose  =  require('mongoose');  
   
var excelSchema = new mongoose.Schema({  
    title:{  
        type:String  ,required:true
    },      
    price:{  
        type:Number, required:true  
    }
});  
   
module.exports = mongoose.model('userModel',excelSchema); 