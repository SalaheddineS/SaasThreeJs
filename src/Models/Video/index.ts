import { Schema,model } from "mongoose";
import Video from "../../Types/Video";

const VideoSchema:Schema = new Schema<Video>({
    uuid:{type:String,required:true},
    name:{type:String,required:true},
    creationDate:{type:Date,required:true},
    url:{type:String,required:true}
});

const VideoModel = model<Video>("Video",VideoSchema);

export default VideoModel;