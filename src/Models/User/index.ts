import {Schema,model} from 'mongoose';
import IUser from '../../Types/User';

const UserSchema:Schema = new Schema<IUser>({
    uuid:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    creationDate:{type:Date,required:true},
    isActive:{type:Boolean,required:true},
    isAdmin:{type:Boolean,required:true},
    mobileNumber:{type:String},
    projects:[{type:Schema.Types.ObjectId,ref:'Project'}]
});

const UserModel = model<IUser>('User',UserSchema);

export default UserModel;