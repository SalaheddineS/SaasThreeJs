import { Schema } from "mongoose";
import Project from "../../Types/Project";

const ProjectSchema:Schema = new Schema<Project>({
    uuid:{type:String,required:true},
    name:{type:String,required:true},
    creationDate:{type:Date,required:true},
    description:{type:String,required:true},
    scenes:[{type:Schema.Types.ObjectId,ref:'Scene'}]
})

export default ProjectSchema;
