import Book from "./Book";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, EntityRepository} from "typeorm";

@Entity()
@EntityRepository()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;

  @OneToMany(type => Book, book => book.user) // note: we will create author property in the Photo class below
  books: Book[];

  static create(id: number, firstName: string, lastName: string, books: Book[]) {
    const user = new User();
    user.id = id;
    user.firstName = firstName;
    user.lastName = lastName;
    user.books = books;
    return user;
  }
}
