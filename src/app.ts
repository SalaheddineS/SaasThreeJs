import Server from "./server";
import passport from 'passport';


passport.initialize();
const app=new Server();
const PORT=process.env.PORT||'4000';
app.launch(PORT);  