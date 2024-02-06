const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        require:true
    },
    instructor:{
        type:Array,
        require:true
    },
    university:{
        type:String,
        require:true,
    }
    
});

//Export the model
module.exports = mongoose.model('Course', courseSchema);