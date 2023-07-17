import {Schema,model} from 'mongoose';
import IText from '../../Types/Text';

const TextSchema:Schema = new Schema<IText>({
    uuid:{type:String,required:true},
    name:{type:String,required:true},
    creationDate:{type:Date,required:true},
    text:{type:String,required:true}
});

const TextModel = model<IText>('Text',TextSchema);

export default TextModel;
    