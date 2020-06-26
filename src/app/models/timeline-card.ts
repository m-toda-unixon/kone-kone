import { User } from './user';
export class TimelineCard {
    constructor(
      public id: string,
      public user: User,
      public date: Date,
      public text: string,
      public heart: number,
    ) {
    }
    toFirebaseArray(){
      return {
        id:this.id,
        text:this.text,
        user_id:this.user.id,
        user_name:this.user.name,
        user_avatar:this.user.avatar,
        date:this.date,
        heart:this.heart
      }
    }
  }