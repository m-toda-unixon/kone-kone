import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { TimelineCard } from '../../models/timeline-card';
import { User } from '../../models/user';
@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  card:TimelineCard;
  sampleUrl:string='../../assets/icon/avatar.svg';
  constructor() {
  }

  getTimelineList()  : Promise<any>{
    return new Promise(async (resolve, reject) => {
      let list = [];
      try{
        let ref = await firebase.firestore().collection('timeline').orderBy('date', 'desc').get();
        ref.forEach(doc =>{
          if(typeof doc.data().user_avator === 'undefined'){
            let src = this.sampleUrl;
            list.push(new TimelineCard(doc.data().id,new User(doc.data().user_id,doc.data().user_name,src),doc.data().date.toDate(),doc.data().text,doc.data().heart));
          }else{
            // アバター画像URL生成
            this.createAvatorURL(doc.data().user_avator).then( url =>{
              list.push(new TimelineCard(doc.data().id,new User(doc.data().user_id,doc.data().user_name,url),doc.data().date.toDate(),doc.data().text,doc.data().heart));
            })
            .catch((url) => {
              list.push(new TimelineCard(doc.data().id,new User(doc.data().user_id,doc.data().user_name,url),doc.data().date.toDate(),doc.data().text,doc.data().heart));
            });
          }
        });
        resolve(list);
      } catch (error) {
        reject("getTimelineList is not correct");
      }
      
    });
  }
  createAvatorURL(src): Promise<any>{
    return new Promise(async (resolve, reject) => {
      firebase.storage().ref(src).getDownloadURL()
      .then( url =>{
        resolve(url);
       })
      .catch((err) => {
        reject(this.sampleUrl);
      });
    });
  }
}
