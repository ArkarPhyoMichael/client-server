import {config} from 'dotenv';
config()
export const serverPort = process.env.PORT || 5000;

export const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret"

export const clientPort = process.env.CLIENT_PORT || 4000;
