import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getAll",Services.TextService.getTexts);
router.get("/get/:uuid",Services.TextService.getText);
router.post("/add",Services.TextService.addText);
router.delete("/delete/:uuid",Services.TextService.deleteText);

export default router; 