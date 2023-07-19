import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getAll",Services.VideoService.getVideos);
router.post("/add",Services.VideoService.addVideo);
router.delete("/delete/:uuid",Services.VideoService.deleteVideo);

export default router;