import {Schema,model} from 'mongoose';
import IImage from '../../Types/Image';

const ImageSchema:Schema = new Schema<IImage>({
    uuid:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    creationDate:{type:Date,required:true},
    url:{type:String,required:true}
});

const ImageModel = model<IImage>('Image',ImageSchema);

export default ImageModel;
    