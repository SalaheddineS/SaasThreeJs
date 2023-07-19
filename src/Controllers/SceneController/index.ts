import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getAll",Services.SceneService.getScenes);
router.post("/add",Services.SceneService.addScene);
router.delete("/delete/:uuid",Services.SceneService.deleteScene);
router.put("/addImageToScene/:uuidScene/:uuidImage",Services.SceneService.addImageToScene);
router.put("/addVideoToScene/:uuidScene/:uuidVideo",Services.SceneService.addVideoToScene);
router.put("/addSongToScene/:uuidScene/:uuidSong",Services.SceneService.addSongToScene);
router.put("/add3D_ModelToScene/:uuidScene/:uuid3DModel",Services.SceneService.add3DModelToScene);
router.put("/addTextToScene/:uuidScene/:uuidText",Services.SceneService.addTextToScene);
router.delete("/deleteImageFromScene/:uuidScene/:uuidImage",Services.SceneService.deleteImageFromScene);
router.delete("/deleteVideoFromScene/:uuidScene/:uuidVideo",Services.SceneService.deleteVideoFromScene);
router.delete("/deleteSongFromScene/:uuidScene/:uuidSong",Services.SceneService.deleteSongFromScene);
router.delete("/delete3D_ModelFromScene/:uuidScene/:uuid3DModel",Services.SceneService.delete3DModelFromScene);
router.delete("/deleteTextFromScene/:uuidScene/:uuidText",Services.SceneService.deleteTextFromScene);

export default router;