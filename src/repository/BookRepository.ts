import Book from '../models/Book';

export default class BookRepository {

  findBy(condition: object) {
    return [
      Book.create('B002RKSZJO', 'Twenty Thousand Leagues under the Sea', 1999, 'Jules Verne', 'English', 236),
      Book.create('B0795Z238F', 'The Complete Sherlock Holmes', 2020, 'Arthur Conan Doyle', 'Ukrainian', 1758)
    ];
  }

  findOneBy(condition: object): Book {
    return null;
  }

  delete(condition: object): boolean {
    return true;
  }

  save(book: Book): boolean {
    return true;
  }
}
