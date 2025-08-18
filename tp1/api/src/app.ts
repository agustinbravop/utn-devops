import { Hono } from "hono";

export const app = new Hono();

app.get("/api/time", (c) => {
  // return local time in ISO format
  const now = new Date();
  return c.json({
    time: now.toISOString(),
  });
});
