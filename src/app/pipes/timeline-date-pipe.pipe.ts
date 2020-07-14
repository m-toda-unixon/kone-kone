import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timelineDatePipe'
})
export class TimelineDatePipePipe implements PipeTransform {

  transform(date: Date) {
    // 日付をTwitter仕様にする（時間があれば実装）
    let now = new Date();
    let dis = now.valueOf() - date.valueOf();
    let res = new Date(dis);
    let str="";
    if(res.valueOf() <= new Date(1).valueOf()){
     // str = res.geth
    }else{

    }
    return date.toLocaleDateString();
  }

}
