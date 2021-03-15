#!/usr/bin/env node
import MainController from "../controllers/MainController";
import BookRepository from "../repository/BookRepository";
import UserRepository from "../repository/UserRepository";
import ViewService from "../services/viewService";
import LogService from "../services/logService";
import {createConnection} from "typeorm";

// @ts-ignore
import connectionConfig from '../ormconfig';

// Варіант 2. Адміністратор архіву бібліотеки.
// Функціонал: внесення інформації про нові надходження до бібліотеки
// (автора, назва, теги - тематика, рік видання, кількість примірників, відділ тощо),
// видалення книги з реєстру, тощо.

// const prisma = new PrismaClient();
const logService = new LogService(
    __dirname + '/../../storage/actions.log',
    __dirname + '/../../storage/errors.log'
);

// @ts-ignore
createConnection(connectionConfig).then(connection => {
  const bookRepository = new BookRepository(connection);
  const userRepository = new UserRepository(connection);
  const view = new ViewService();
  logService.log('Application started');
  const controller = new MainController(view, logService, bookRepository, userRepository);
  controller.menu().then();
}).catch(error => logService.error(error));
