import { CharaController } from "../controllers/chara.control";
import express from "express";
const router: express.Router = express.Router();

router.get("/", CharaController.getCharas);
router.get("/:name", CharaController.getCharabyName);   
router.post("/", CharaController.createChara);
router.put("/:name", CharaController.updateChara);
router.delete("/:name", CharaController.deleteChara);
router.get("/:name/eidolon", CharaController.geteidolon);
router.get("/:name/trace", CharaController.getmove);
router.get("/:name/general", CharaController.getstat);


export default router;