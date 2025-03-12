import { CharaController } from "../controllers/chara.control";
import express from "express";
const router: express.Router = express.Router();

router.get("/", CharaController.getCharas);
router.get("/:name", CharaController.getCharabyName);   
router.post("/", CharaController.createChara);
router.put("/:name", CharaController.updateChara);
router.delete("/:name", CharaController.deleteChara);

export default router;