#!/usr/bin/env node
import MainController from "../controllers/MainController";
import BookRepository from "../repository/BookRepository";
import UserRepository from "../repository/UserRepository";
import ViewService from "../services/viewService";

// Варіант 2. Адміністратор архіву бібліотеки.
// Функціонал: внесення інформації про нові надходження до бібліотеки
// (автора, назва, теги - тематика, рік видання, кількість примірників, відділ тощо),
// видалення книги з реєстру, тощо.

const bookRepository = new BookRepository();
const userRepository = new UserRepository();
const view = new ViewService();
const controller = new MainController(view, bookRepository, userRepository);

controller.menu();
