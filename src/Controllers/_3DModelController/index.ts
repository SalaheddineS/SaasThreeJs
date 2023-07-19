import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getAll",Services._3DModelService.get_3D_Models);
router.post("/add",Services._3DModelService.add_3D_Model);
router.delete("/delete/:uuid",Services._3DModelService.delete_3D_Model);

export default router;

