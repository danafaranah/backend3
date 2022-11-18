import { Router } from "express";
import postCtrl from "../controllers/post.controller.js";
import { upload } from "../middleware/imgUpload.js";

const route = Router();

route.get("/", postCtrl.getPosts);
route.get("/:id", postCtrl.listOne);
route.delete("/:id", postCtrl.delete);
route.put("/:id", upload.single("img"), postCtrl.update);
route.post("/", upload.single("img"), postCtrl.add);

export default route;