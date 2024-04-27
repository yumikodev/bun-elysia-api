import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { Logestic } from "logestic";
import NotesRoutes from "@Modules/notes";

const app = new Elysia();

// Middlewares
app.use(cors());
app.use(Logestic.preset("fancy"));

// Routes
app.use(NotesRoutes);

// Start server
app.listen(Bun.env.PORT || 3000, ({ url }) => {
  console.log(`Server running at ${url}`);
});
