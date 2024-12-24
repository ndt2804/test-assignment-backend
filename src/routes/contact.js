import { Router } from "express";
import { createContactController, getAllContacts } from "../controllers/contact.controller.js";

const contactRouter = Router();
contactRouter.post("/contact-us", createContactController);
contactRouter.get("/get-contact", getAllContacts);

export default contactRouter;