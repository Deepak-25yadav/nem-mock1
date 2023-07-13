

const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title:String,
    body:String,
    device:String,
    no_of_comments:String,
    userID:String,
    userName:String,
},{
    versionKey:false
})

const PostModel = mongoose.model("post",PostSchema);

module.exports = {
    PostModel
}