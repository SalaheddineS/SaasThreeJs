import {Schema,model} from 'mongoose';
import ISong from '../../Types/Song';

const SongSchema:Schema = new Schema<ISong>({
    uuid:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    creationDate:{type:Date,required:true},
    url:{type:String,required:true}
});

const SongModel = model<ISong>('Song',SongSchema);

export default SongModel;