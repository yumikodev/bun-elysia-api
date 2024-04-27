import { t } from "elysia";

export const noteCreateBody = t.Object({
  title: t.String(),
  description: t.Optional(t.String()),
  author: t.String(),
});

export const noteUpdateBody = t.Object({
  title: t.Optional(t.String()),
  description: t.Optional(t.String()),
  author: t.Optional(t.String()),
});
