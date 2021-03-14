import Book from "./Book";

export default class User {
  id: number;
  firstName: string;
  lastName: string;
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
