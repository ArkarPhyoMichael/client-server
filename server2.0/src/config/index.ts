import { config } from "dotenv";

config();

export const SERVER_PORT = process.env.SERVER_PORT || 5000;
export const JWT_SECRET = process.env.JWT_SECRET || "JWT_Secret";
export const CLIENT_PORT = process.env.CLIENT_PORT || "JWT_Secret";
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@admin.com";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password";
