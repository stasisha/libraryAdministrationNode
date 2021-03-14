import User from "../models/User";
import {Connection, Repository} from "typeorm";

export default class UserRepository {
  repo: Repository<User>;

  constructor(db: Connection) {
    this.repo = db.getRepository<User>(User);
  }

  async findBy(condition: object = {}) {
    return await this.repo.find({...condition, relations: ["books"]});
  }

  async findOneBy(condition: object = {}) {
    return await this.repo.findOne(condition, {relations: ["books"]});
  }

  async delete(condition: object) {
    const user = await this.findOneBy(condition);
    return await this.repo.remove(user);
  }

  async save(user: User) {
    return await this.repo.save(user);
  }
}
