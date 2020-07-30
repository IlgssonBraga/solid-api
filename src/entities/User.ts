import { uuid } from 'uuidv4';

export class User {
  public readonly id: string;

  public name: string;

  public email: string;

  public password: string;

  constructor(props: Omit<User, 'id'>, _id?: string) {
    Object.assign(this, props);

    if (!_id) {
      this.id = uuid();
    }
  }
}
