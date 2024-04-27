import { NotesService } from "./notes.service";
import { Context } from "elysia";

const service = new NotesService();

interface NotesBody {
  title: string;
  description?: string;
  author: string;
}

export class NotesController {
  async getAll({ set }: Context) {
    try {
      const notes = await service.getAllNotes();

      return {
        data: notes,
      };
    } catch (e) {
      set.status = 500;

      return {
        error: e.message,
      };
    }
  }

  async getById({
    set,
    params: { id },
  }: Context<{ params: Record<"id", string> }>) {
    try {
      const note = await service.getById(id);

      if (!note) {
        set.status = 404;

        return {
          error: "Note not found",
        };
      }

      return {
        data: note,
      };
    } catch (e) {
      set.status = 500;

      return {
        error: e.message,
      };
    }
  }

  async create({ set, body }: Context<{ body: NotesBody }>) {
    try {
      const createdNote = await service.create(body);

      return {
        data: createdNote,
      };
    } catch (e) {
      set.status = 500;

      return {
        error: e.message,
      };
    }
  }

  async update({
    set,
    params: { id },
    body,
  }: Context<{ params: Record<"id", string>; body: Partial<NotesBody> }>) {
    try {
      const existNote = await service.getById(id);

      if (!existNote) {
        set.status = 404;

        return {
          error: "Note not found",
        };
      }

      const updatedNote = await service.update(existNote.id, body);

      return {
        data: updatedNote,
      };
    } catch (e) {
      set.status = 500;

      return {
        error: e.message,
      };
    }
  }

  async delete({
    set,
    params: { id },
  }: Context<{ params: Record<"id", string> }>) {
    try {
      const existNote = await service.getById(id);

      if (!existNote) {
        set.status = 404;

        return {
          error: "Note not found",
        };
      }

      const deletedNote = await service.delete(existNote.id);

      return {
        data: deletedNote,
      };
    } catch (e) {
      set.status = 500;

      return {
        error: e.message,
      };
    }
  }
}
