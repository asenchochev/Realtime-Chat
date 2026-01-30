import { getEnv } from "../utils/get-env";

export const Env = {
    PORT: getEnv("PORT", "8000"),
    MONGO_URI: getEnv("MONGO_URI"),
    JWT_SECRET: getEnv("JWT_SECRET"),
    NODE_ENV: getEnv("NODE_ENV", "development"),
    JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "1d"),
    FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "http://localhost:5173"),

} as const;