import { Elysia } from "elysia";
import { NotesController } from "./notes.controller";
import { noteCreateBody, noteUpdateBody } from "./schemas/notes.schema";

const controller = new NotesController();

export default new Elysia({
  prefix: "/notes",
})
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", controller.create, {
    body: noteCreateBody,
  })
  .put("/:id", controller.update, {
    body: noteUpdateBody,
  })
  .delete("/:id", controller.delete);
