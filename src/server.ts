import express, { Express, Request, Response } from 'express';
import {connect} from 'mongoose';
import Controllers from './Controllers';
import passport from './Configuration/JwtPassportJs';

class Server {
    private app:Express;

    constructor()
    {

        this.app=express();
        this.parserMiddleware();
        this.controllerConfig();
    }

    private parserMiddleware()
    {
        this.app.use(express.json());
    }

   
    private controllerConfig()
    {
        this.app.use('/image',passport.authenticate('jwt',{session:false}),Controllers.ImageController);
        this.app.use('/3dmodel',Controllers._3DModelController); 
        this.app.use('/project',Controllers.ProjectController);
        this.app.use('/scene',Controllers.SceneController);
        this.app.use('/song',Controllers.SongController);
        this.app.use('/text',Controllers.TextController);
        this.app.use('/user',Controllers.UserController);
        this.app.use('/video',Controllers.VideoController);
        this.app.use('/auth',Controllers.AuthenticationController);
    }

    private async dbConnect(){
        await connect(process.env.DB_CONN_STRING as string)
        console.log("The database is connected");
    }


    public async launch(port:string){
        try
        {
        await this.dbConnect();
        this.app.listen(port,()=>{console.log(`server is listening on port ${port}`)})
        }
        catch(error)
        {
        console.log(error);
        }
       
    }
}

export default Server;