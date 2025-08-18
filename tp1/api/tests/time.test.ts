import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { app } from "../src/app.js";

describe("GET /api/time", () => {
  const fixed = new Date("2025-01-02T03:04:05.000Z");

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(fixed);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("returns 200 with an ISO string equal to the mocked time", async () => {
    // Hono exposes a convenient request helper:
    const res = await app.request("/api/time");
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.time).toBe("2025-01-02T03:04:05.000Z");
  });

  it("returns JSON content-type", async () => {
    const res = await app.request("/api/time");
    expect(res.headers.get("content-type")).toMatch(/application\/json/i);
  });
});
