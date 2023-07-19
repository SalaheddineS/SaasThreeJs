import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getAll",Services.ImageService.getImages);
router.post("/add",Services.ImageService.addImage);
router.delete("/delete/:uuid",Services.ImageService.deleteImage);

export default router;
