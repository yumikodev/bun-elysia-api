import { t } from "elysia";

export const noteCreateSchema = t.Object({
  title: t.String(),
  description: t.Optional(t.String()),
  author: t.String(),
});

export const noteUpdateSchema = t.Object({
  title: t.Optional(t.String()),
  description: t.Optional(t.String()),
  author: t.Optional(t.String()),
});
