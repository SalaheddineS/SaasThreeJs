import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as mongoDB from "mongodb";

class Server {
    private app:Express;

    constructor()
    {
        dotenv.config();
        this.app=express();
        this.parserMiddleware();
        this.routeConfig();
    }

    private parserMiddleware()
    {
        this.app.use(express.json());
    }

    private routeConfig()
    {
        this.app.use('/',(_:Request,res:Response)=>{res.send("<h1>Hello World</h1>")});
    }

    private async dbConnect(){
        if(!process.env.DB_CONN_STRING) throw new Error ("no Database link");
        const client:mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
        await client.connect().then(()=>console.log('the client has successfuly been connected to the DB'));
    }


    public async launch(port:string){
        await this.dbConnect();
        this.app.listen(port,()=>{console.log(`server is listening on port ${port}`)})
    }
}

export default Server;