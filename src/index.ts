import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));
app.get("/static/*", serveStatic({ root: "./" }));

export default app;
