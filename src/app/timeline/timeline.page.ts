import { Component, OnInit, Input } from '@angular/core';
import { TimelineCard } from '../models/timeline-card';
import { User } from '../models/user';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  timeline:any=[];
  constructor() {
    // サンプルデータ
    this.setSample(20);
  }
  // サンプルデータ
  setSample(num){
    for (let index = 0; index < num; index++) {
      this.timeline.push(
        new TimelineCard(
          "card-id",
          new User("user-id","user-name",'../../assets/icon/avatar.svg'),
          new Date(),
          "Hello World!",
          100
        )
      );
    }
  }
  ngOnInit() {
  }
  refreshAction(event){
    event.target.complete();
  }
}
