import IProject from "../Project";

export default interface IUser
{   
    uuid:string;
    name:string;
    email:string;
    password:string;
    creationDate:Date;
    isActive:boolean;
    isAdmin:boolean;
    mobileNumber:string;
    projects:IProject[];
}