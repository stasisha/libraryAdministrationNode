#!/usr/bin/env node
import MainController from "../controllers/MainController";
import BookRepository from "../repository/BookRepository";
import UserRepository from "../repository/UserRepository";
import ViewService from "../services/viewService";
import LogService from "../services/logService";

// Варіант 2. Адміністратор архіву бібліотеки.
// Функціонал: внесення інформації про нові надходження до бібліотеки
// (автора, назва, теги - тематика, рік видання, кількість примірників, відділ тощо),
// видалення книги з реєстру, тощо.

const bookRepository = new BookRepository();
const userRepository = new UserRepository();
const view = new ViewService();
const logService = new LogService(
    __dirname + '/../../storage/actions.log',
    __dirname + '/../../storage/errors.log'
);
logService.log('Application started');
const controller = new MainController(view, logService, bookRepository, userRepository);

try {
  controller.menu();
} catch (e) {
  logService.error(e);
  controller.menu();
}
