import Book from '../models/Book';
import {Connection, Repository} from "typeorm";

export default class BookRepository {
  repo: Repository<Book>;

  constructor(db: Connection) {
    this.repo = db.getRepository<Book>(Book);
  }

  async findBy(condition: object) {
    return await this.repo.find(condition);
  }

  async findOneBy(condition: object) {
    return await this.repo.findOne(condition);
  }

  async delete(condition: object) {
    const user = await this.findOneBy(condition);
    return await this.repo.remove(user);
  }

  async save(book: Book) {
    return await this.repo.save(book);
  }
}
