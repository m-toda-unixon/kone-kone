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
  }