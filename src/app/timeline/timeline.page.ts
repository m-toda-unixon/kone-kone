import { Component, OnInit, Input } from '@angular/core';
import { TimelineService } from '../services/timeline/timeline.service';
import { TimelineCard } from '../models/timeline-card';
import { User } from '../models/user';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  timeline:any=[];
  constructor(
    private timelineS: TimelineService,
  ) {
    // サンプルデータ
    //this.setSample(20);
    this.getTimeline();
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
    this.timelineS.getTimelineList()
    .then((res) => {
      this.timeline = res;
      event.target.complete();
    })
    .catch((err) => {
      console.log(`${err} Sorry about that`);
      event.target.complete();
  });
    
  }
  getTimeline(){
    this.timelineS.getTimelineList()
    .then((res) => {
      this.timeline = res;
    })
    .catch((err) => {
      console.log(`${err} Sorry about that`);
  });
  }
}
