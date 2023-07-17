import { Schema,model} from "mongoose";
import Scene from "../../Types/Scene";


const SceneSchema:Schema = new Schema<Scene>({
    uuid:{type:String,required:true},
    name:{type:String,required:true},
    creationDate:{type:Date,required:true},
    description:{type:String,required:true},
    _3DModels :[{type:Schema.Types.ObjectId,ref:'_3DModel'}],
    songs: [{type:Schema.Types.ObjectId,ref:'Song'}],
    images: [{type:Schema.Types.ObjectId,ref:'Image'}],
    videos: [{type:Schema.Types.ObjectId,ref:'Video'}],
    texts: [{type:Schema.Types.ObjectId,ref:'Text'}]
});

const SceneModel = model<Scene>("Scene",SceneSchema);

export default SceneModel;

