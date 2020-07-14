import { User } from './user';
export class Message {
    constructor(
      public id: string,
      public text: string,
      public create_date: Date,
      public user: User,
      public avatar: string,
      public last_text: string,
    ) {
    }
  }