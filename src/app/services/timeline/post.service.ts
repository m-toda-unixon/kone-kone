import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { TimelineCard } from '../../models/timeline-card';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() { }
  setTimeline(data:TimelineCard){
    return new Promise(async (resolve, reject) => {

      try{
        let ref = await firebase.firestore().collection('timeline').add(data.toFirebaseArray());
        
        resolve("setTimeline is correct");
      } catch (error) {
        reject("setTimeline is not correct");
      }
      
    });


  }
}
