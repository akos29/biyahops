const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:8084" : "https://safari-ict.com";
