import { Elysia } from "elysia";
import { NotesController } from "./notes.controller";
import { noteCreateSchema, noteUpdateSchema } from "@Schemas/notes.schema";

const controller = new NotesController();

export default new Elysia({
  prefix: "/notes",
})
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", controller.create, {
    body: noteCreateSchema,
  })
  .put("/:id", controller.update, {
    body: noteUpdateSchema,
  })
  .delete("/:id", controller.delete);
