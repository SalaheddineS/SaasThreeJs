import Services from "../../Services";
import { Router } from "express";   

const router = Router();

router.post('/login',Services.AuthenticationService.login);

export default router