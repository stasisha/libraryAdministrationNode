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

export default class MainController {

  view: ViewService;
  bookRepository: BookRepository;
  userRepository: UserRepository;

  constructor(view: ViewService, bookRepository: BookRepository, userRepository: UserRepository) {
    this.view = view;
    this.bookRepository = bookRepository;
    this.userRepository = userRepository;
  }

  menu = async () => {
    const items = [
      '1. Book list',
      '2. Add book',
      '3. Delete book',
      '4. User list',
      '5. Add user',
      '6. Assign book to user',
      '7. Exit'
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
          process.exit();
          break;
        default:
          await this.menu();
      }
    };
    await this.view.render(menu, {items, menuCallback});
  };

  async bookList() {
    const books = await this.bookRepository.findBy({});
    await this.view.render(bookList, {books});
  }

  async userList() {
    const users = await this.userRepository.findBy({});
    await this.view.render(userList, {users});
  }

  async addBookForm() {
    const book = new Book();
    await this.view.render(addBookForm, {book});
    await this.bookRepository.save(book);
  }


  async addUserForm() {
    const user = new User();
    await this.view.render(addUserForm, {user});
    await this.userRepository.save(user);
  }

  async deleteBook() {
    await this.view.render(selectBookForm, {
      callback: (id) => {
        this.bookRepository.delete({id});
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
    const book = this.bookRepository.findOneBy({'id': bookId});
    user.books.push(book);
    this.userRepository.save(user);
  }

}
