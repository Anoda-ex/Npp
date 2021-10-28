import { Injectable, Type } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNumbers():number {
    return 23
  } 
  getString():string {
    return 'Hello World!'
  } 
  getArrays(): number[] {
    return [1,2,3]
  } 
  getEnums():  any {
    return {l:1,s:3,a:4}
  }
  getMultitypeArrays():(string|number)[] {
    return [1,3,"hello",4]
  } 
  getMultitypeValues(): string|number {
    return "string|number"
  }

}
