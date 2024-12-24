import { Router } from "express";
import { createContactController } from "../controllers/contact.controller.js";

const contactRouter = Router();
contactRouter.post("/contact-us", createContactController);
export default contactRouter;