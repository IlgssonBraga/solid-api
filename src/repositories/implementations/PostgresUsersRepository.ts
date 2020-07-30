import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/User';

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(userParam => userParam.email === email);

    if (!user) {
      throw new Error('User not exists');
    }

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
