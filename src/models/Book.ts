import {Entity, PrimaryColumn, Column, EntityRepository, ManyToOne} from "typeorm";
import User from "./User";

@Entity()
@EntityRepository()
export default class Book {

  @PrimaryColumn()
  ASIN: string;
  @Column()
  title: string;
  @Column()
  publishYear: number;
  @Column()
  author: string;
  @Column()
  language: string;
  @Column()
  pages: number;
  @ManyToOne(type => User, user => user.books)
  user: User;

  static create(ASIN: string = null, title: string = null, publishYear: number = null, author: string = null, language: string = null, pages: number = null): Book {
    const book = new Book();
    book.ASIN = ASIN;
    book.title = title;
    book.publishYear = publishYear;
    book.author = author;
    book.language = language;
    book.pages = pages;
    return book;
  }

}
