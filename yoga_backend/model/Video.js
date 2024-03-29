const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    thumbnail: {
        type: String, // Assuming the thumbnailFilename is a string (image filename)
      },
    link:{
        type:String,
        required:true
    }

  });
  
module.exports = mongoose.model('Video', videoSchema);