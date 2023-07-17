import {Schema,model,connect} from 'mongoose';
import IUser from '../../Types/User';

const UserSchema:Schema = new Schema<IUser>({
    uuid:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    creationDate:{type:Date,required:true},
    isActive:{type:Boolean,required:true},
    isAdmin:{type:Boolean,required:true},
    mobileNumber:{type:String,required:true}
});

const UserModel = model<IUser>('User',UserSchema);

export default UserModel;