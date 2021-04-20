import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {//создаем обертку чтобы использовать синтаксис async/await
  const app = await NestFactory.create(AppModule);// ждем пока создадут модуль 
  await app.listen(3000);//говорим что хотим запустить сервер на порту 3000
}
bootstrap();
