import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getAll",Services.SongService.getSongs);
router.get("/get/:uuid",Services.SongService.getSong);
router.post("/add",Services.SongService.addSong);
router.delete("/delete/:uuid",Services.SongService.deleteSong);

export default router;