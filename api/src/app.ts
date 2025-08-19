import { Hono } from "hono";

export const app = new Hono();

app.get("/api/time", (c) => c.json({ time: new Date().toISOString() }));
