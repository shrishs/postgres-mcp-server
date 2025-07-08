import pg from "pg";
import { config } from "./env.js";

const { username, password, host, port, database } = config.postgres;

export const databaseUrl = `postgresql://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${host}:${port}/${database}?sslmode=require`;

export const resourceBaseUrl = new URL(databaseUrl);
resourceBaseUrl.protocol = "postgres:";
resourceBaseUrl.password = ""; // Clear password for constructing resource URIs

export const pool = new pg.Pool({
    connectionString: databaseUrl,
});

export const SCHEMA_PATH = "schema";
