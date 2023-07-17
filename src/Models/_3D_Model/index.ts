import { Schema,model } from "mongoose";    
import _3D_Model from "../../Types/_3D_Model";

const _3D_ModelSchema:Schema = new Schema<_3D_Model>({
    uuid:{type:String,required:true},
    name:{type:String,required:true},
    creationDate:{type:Date,required:true},
    url:{type:String,required:true}
});

const _3D_ModelModel = model<_3D_Model>("_3D_Model",_3D_ModelSchema);

export default _3D_ModelModel;