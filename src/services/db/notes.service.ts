import { prisma } from "@Services/db";

export class NotesService {
  getAllNotes() {
    return prisma.notes.findMany();
  }

  getById(id: string) {
    return prisma.notes.findUnique({
      where: {
        id,
      },
    });
  }

  create(data: any) {
    return prisma.notes.create({
      data,
    });
  }

  update(id: string, data: any) {
    return prisma.notes.update({
      where: {
        id,
      },
      data,
    });
  }

  delete(id: string) {
    return prisma.notes.delete({
      where: {
        id,
      },
    });
  }
}
