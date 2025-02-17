import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/brain/auth/route";

export const runtime = "edge";

const app = new Hono().basePath("/api");

export const routes = app.route("/auth", auth);

// 满足 nextjs route 的要求
export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
