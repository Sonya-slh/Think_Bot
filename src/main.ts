import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Think Bot')
    .setDescription('The app API description')
    .setVersion('1.0')
    .addTag('Think Bot App')
    .build();
    const Document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, Document)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
