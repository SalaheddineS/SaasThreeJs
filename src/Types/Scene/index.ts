import Image from '../Image';
import Song from '../Song';
import Video from '../Video';
import Text from '../Text';
import _3DModel from '../_3D_Model';

export default interface IScene{
    uuid:string;
    name:string;
    description:string;
    creationDate:Date;
    images:Image[];
    songs:Song[];
    videos:Video[];
    texts:Text[];
    _3DModels:_3DModel[];
}