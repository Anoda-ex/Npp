import { Injectable, Type } from '@nestjs/common';

@Injectable()
export class AppService {
  getAnswer(): Promise<any> {
    let a,b:number;
    a=11234
    b=45
    const res=this.maxNumber(a,b)
    return res
  }
  public async maxNumber(a:number,b:number){
    if(a>b){
      return a
    }else{
      return b
    }
  }

}
