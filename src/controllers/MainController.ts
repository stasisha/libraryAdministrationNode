import Book from '../models/Book';
import bookList from '../views/bookList';
import addBookForm from '../views/addBookForm';
import selectBookForm from '../views/selectBookForm';
import addUserForm from '../views/addUserForm';
import menu from '../views/menu';
import BookRepository from "../repository/BookRepository";
import UserRepository from "../repository/UserRepository";
import User from "../models/User";
import selectUserForm from "../views/selectUserForm";
import userList from "../views/userList";
import ViewService from "../services/viewService";
import LogService from "../services/logService";

export default class MainController {

  view: ViewService;
  logger: LogService;
  bookRepository: BookRepository;
  userRepository: UserRepository;

  constructor(view: ViewService, logger: LogService, bookRepository: BookRepository, userRepository: UserRepository) {
    this.view = view;
    this.logger = logger;
    this.bookRepository = bookRepository;
    this.userRepository = userRepository;
  };

  menu = async () => {
    const items = [
      '1. Book list',
      '2. Add book',
      '3. Delete book',
      '4. User list',
      '5. Add user',
      '6. Assign book to user',
      '7. Add Book to User',
      '8. Exit'
    ];

    const menuCallback = async (error, response) => {
      switch (response.selectedIndex + 1) {
        case 1:
          await this.bookList();
          await this.menu();
          break;
        case 2:
          await this.addBookForm();
          await this.menu();
          break;
        case 3:
          await this.deleteBook();
          await this.menu();
          break;
        case 4:
          await this.userList();
          await this.menu();
          break;
        case 5:
          await this.addUserForm();
          await this.menu();
          break;
        case 6:
          await this.addBookToUser();
          await this.menu();
          break;
        case 7:
          await this.addBookToUser();
          await this.menu();
          break;
        case 8:
          this.logger.log('Application terminated');
          process.exit();
          break;
        default:
          await this.menu();
      }
    };
    await this.view.render(menu, {items, menuCallback});
  };

  async bookList() {
    this.logger.log('Book list');
    const books = await this.bookRepository.findBy({});
    await this.view.render(bookList, {books});
  }

  async userList() {
    this.logger.log('User list');
    const users = await this.userRepository.findBy({});
    await this.view.render(userList, {users});
  }

  async addBookForm() {
    const book = new Book();
    await this.view.render(addBookForm, {book});
    const bookAddResult = await this.bookRepository.save(book);
    if (!bookAddResult) {
      throw new Error('Book was not added');
    }
    this.logger.log('Book added', {book});
  }


  async addUserForm() {
    const user = new User();
    await this.view.render(addUserForm, {user});
    const userAddResult = await this.userRepository.save(user);
    if (!userAddResult) {
      throw new Error('User was not added');
    }
    this.logger.log('User added', {user});
  }

  async deleteBook() {
    await this.view.render(selectBookForm, {
      callback: (id) => {
        const deleteResult = this.bookRepository.delete({id});
        if (!deleteResult) {
          throw new Error(`Impossible delete book with id ${id}`);
        }
        this.logger.log('Book deleted', {id});
      }
    });
  }

  async addBookToUser() {
    let bookId: number;
    await this.view.render(selectBookForm, {
      callback: async (id) => {
        bookId = id;
      }
    });
    let userId: number;
    await this.view.render(selectUserForm, {
      callback: (id) => {
        userId = id;
      }
    });

    const user = this.userRepository.findOneBy({'id': userId});
    if (!user) {
      throw new Error('User not found. User id: ' + userId);
    }
    const book = this.bookRepository.findOneBy({'id': bookId});
    if (!book) {
      throw new Error('Book not found. ASIN :' + bookId);
    }
    user.books.push(book);
    const saveResult = this.userRepository.save(user);
    if (!saveResult) {
      throw new Error(`Book was not added to user. userId: ${userId}. Book ASIN: ${bookId}`);
    }
    this.logger.log('Book added to user', {user, book});
  }

}
