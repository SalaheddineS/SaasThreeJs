import Services from "../../Services";
import { Router } from "express";   
import passportGoogle from "../../Configuration/GooglePassportJs";
const router = Router();

router.post('/login',Services.AuthenticationService.login);
router.get('/google',passportGoogle.authenticate("google", {session: false,scope: ["profile", "email"]}));
router.get('/google/callback',passportGoogle.authenticate("google", {session: false,scope: ["profile", "email"]}),Services.AuthenticationService.googleLogin);

export default router