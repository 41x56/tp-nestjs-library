import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,});

  const config = app.get(ConfigService);
const port = Number(config.get<string>('PORT') ?? '3001');
await app.listen(port);
console.log(`Application running on http://localhost:${port}`);
}
await bootstrap();
