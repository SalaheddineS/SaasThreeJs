import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getAll",Services.ProjectService.getProjects);
router.post("/add",Services.ProjectService.addProject);
router.delete("/delete/:uuid",Services.ProjectService.deleteProject);
router.put("/addSceneToProject/:uuidProject/:uuidScene",Services.ProjectService.addSceneToProject);

export default router;