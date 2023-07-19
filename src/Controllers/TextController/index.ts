import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getAll",Services.UserService.getUsers);
router.post("/add",Services.UserService.addUser);
router.delete("/delete/:uuid",Services.UserService.deleteUser);
router.put("addProjectToUser/:uuidUser/:uuidProject",Services.UserService.addProjectToUser);

export default router;