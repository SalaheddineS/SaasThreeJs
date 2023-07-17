import Scene from "../Scene";

export default interface IProject{
    uuid:string;
    name:string;
    description:string;
    creationDate:Date;
    scenes:Scene[];
}