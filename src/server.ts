import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as mongoDB from "mongodb";
import {connect} from 'mongoose';
import Controllers from './Controllers';
class Server {
    private app:Express;

    constructor()
    {
        dotenv.config();
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
        this.app.use('/image',Controllers.ImageController);
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