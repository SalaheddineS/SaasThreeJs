import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';


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

    public launch(port:string){
        this.app.listen(port,()=>{console.log(`server is listening on port ${port}`)})
    }
}

export default Server;