import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNumbers():number {
    return this.appService.getNumbers()
  } 
  getString():string {
    return this.appService.getString()
  } 
  getArrays(): number[] {
    return this.appService.getArrays()
  } 
  getEnums():  any {
    return this.appService.getEnums()
  }
  getMultitypeArrays():(string|number)[] {
    return this.appService.getMultitypeArrays()
  } 
  getMultitypeValues(): string|number {
    return this.appService.getMultitypeValues()
  }
}
