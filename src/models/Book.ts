export default class Book {
  ASIN: string;
  title: string;
  publishYear: number;
  author: string;
  language: string;
  pages: number;

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
