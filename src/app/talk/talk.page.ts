import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models/user'
import { Talk } from '../models/talk'
@Component({
  selector: 'app-talk',
  templateUrl: './talk.page.html',
  styleUrls: ['./talk.page.scss'],
})
export class TalkPage implements OnInit {
  talks:any=[];
  constructor(public navCtr:NavController) {
    // サンプルデータ
    this.setSample(20);
  }
  // サンプルデータ
  setSample(num){
    for (let index = 0; index < num; index++) {
      this.talks.push(
        new Talk(
          "card-id"+index,
          "テストデータname"+index,
          new Date(),
          "テストデータtext"+index,
          '../../assets/icon/avatar.svg',
          "最新のメッセージ"+index,
          [
            new User("user-id"+index+1,"user-name"+index+1,'../../assets/icon/avatar.svg'),
            new User("user-id"+index+2,"user-name"+index+2,'../../assets/icon/avatar.svg'),
            new User("user-id"+index+3,"user-name"+index+3,'../../assets/icon/avatar.svg')
          ]
        )
      );
    }
  }
  refreshAction(event){
    // this.timelineS.getTimelineList()
    // .then((res) => {
    //   this.timeline = res;
    //   event.target.complete();
    // })
    // .catch((err) => {
    //   console.log(`${err} Sorry about that`);
    //   event.target.complete();
    // });
    event.target.complete();
  }
  goMessage(talk){
    this.navCtr.navigateForward("/message");
  }
  ngOnInit() {
  }

}
