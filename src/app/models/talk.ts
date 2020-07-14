import { User } from './user';
export class Talk {
    constructor(
      public id: string,
      public name: string,
      public update_date: Date,
      public text: string,
      public avatar: string,
      public last_text: string,
      public member: User[],
    ) {
    }
  }