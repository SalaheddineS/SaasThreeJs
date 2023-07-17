import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as mongoDB from "mongodb";
import mongoClient from './Singleton/SingletonClient';

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
        this.app.use('/',(_:Request,res:Response)=>{res.send("<h1>Hello World</h1>")});
    }

    private async dbConnect(){
        
        const client:mongoDB.MongoClient = mongoClient.getInstance();
        await client.connect().then(()=>console.log('the client has successfuly been connected to the DB'));
    }


    public async launch(port:string){
        await this.dbConnect();
        this.app.listen(port,()=>{console.log(`server is listening on port ${port}`)})
    }
}

export default Server;