import express from "express";
import http from "http";
import { loadEnv } from "./utilities";

// Loading up relevant environment variables
loadEnv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bootstrap = () => {
  const port = Number(process.env.APP_PORT ?? "3001");
  app.set("port", port);

  const server = http.createServer(app);
  server.listen(port);

  server.on("error", () => {
    console.log("error");
  });

  server.on("listening", () => {
    const addr = server.address();
    const bind =
      typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
  });
};

bootstrap();
