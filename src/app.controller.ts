import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //какой метод запроса мы здесь ожидаем
  getHello(): string {
    // return this.appService.getHello();
    return "Hello NestJS!"
  }
}
