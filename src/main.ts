import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //to establish the connection between frontend and backend
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
