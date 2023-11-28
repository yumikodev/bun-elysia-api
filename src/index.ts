import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { logger } from "@grotto/logysia";
import NotesRoutes from "@Routes/notes/index.routes";

const app = new Elysia();

// Middlewares
app.use(cors());
app.use(logger());

// Routes
app.use(NotesRoutes);

// Start server
app.listen(Bun.env.PORT || 3000, ({ hostname, port }) => {
  console.log(`Server running at ${hostname}:${port}`);
});
