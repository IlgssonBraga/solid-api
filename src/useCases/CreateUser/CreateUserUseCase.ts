import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { User } from '../../entities/User';

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email,
    );

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}