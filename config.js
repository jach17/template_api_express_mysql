import { config } from "dotenv";
config();
export const DB_PORT = 3306;
export const PORT = 5000;
export const DB_HOST = process.env.DB_HOST ||'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '12345678';
export const DB_DATABASE = process.env.DB_DATABASE = 'compannydb';
