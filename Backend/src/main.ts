import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow the Next.js frontend to communicate with the NestJS API
  const allowedOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",

    // Production frontend
    "https://pathmanathan-niroshan.vercel.app",

    // Environment variable
    process.env.FRONTEND_URL,
  ].filter(Boolean);

  app.enableCors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();