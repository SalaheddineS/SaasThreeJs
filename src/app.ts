import Server from "./server";

const app=new Server();
const PORT=process.env.PORT||'4000';
app.launch(PORT);