import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostService } from '../services/timeline/post.service';
import { TimelineCard } from '../models/timeline-card';
import { User } from '../models/user';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  card:TimelineCard;
  textMessage:string;
  constructor(
    private postS:PostService,
    private nav: NavController
  ) {
  }

  ngOnInit() {
  }

  post_message(){
    this.card = new TimelineCard("",new User("","",""),new Date(),this.textMessage,0);
    this.postS.setTimeline(this.card)
    .then((res) => {
      //this.postS = res;
      this.nav.back();
    })
    .catch((err) => {
      console.log(`${err} Sorry about that`);
  });
  }
}
