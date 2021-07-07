import User from "../models/User";

export default class UserRepository {

  findBy(condition: object) {
    const user = new User();
    user.books = [];
    return [
      user,
    ];
  }

  findOneBy(condition: object): User {
    const user = new User();
    user.books = [];
    return user;
  }

  delete(condition: object): boolean {
    return true;
  }

  save(user: User): boolean {
    return true;
  }
}
