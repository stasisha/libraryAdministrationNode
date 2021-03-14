#!/usr/bin/env node
import MainController from "../controllers/MainController";
import BookRepository from "../repository/BookRepository";
import UserRepository from "../repository/UserRepository";

// Варіант 2. Адміністратор архіву бібліотеки.
// Функціонал: внесення інформації про нові надходження до бібліотеки
// (автора, назва, теги - тематика, рік видання, кількість примірників, відділ тощо),
// видалення книги з реєстру, тощо.


// c. Необхідно реалізувати на основі шаблону проектування MVC (model-view-control).
//   Частина View може бути реалізована у вигляді або консольного або графічного або веб вигляду.
//   Частина Control повинна бути реалізована повністю.
//   Частина Model - частково, в нею будуть внесені зміни в подальших роботах, там буде реалізована робота з БД.

const bookRepository = new BookRepository();
const userRepository = new UserRepository();
const controller = new MainController(bookRepository, userRepository);

controller.menu();

// const greeting = chalk.white.bold("Hello!");
//
// const boxenOptions = {
//   padding: 1,
//   margin: 1,
//   borderStyle: "round",
//   borderColor: "green",
//   backgroundColor: "#555555"
// };
// const msgBox = boxen( greeting, boxenOptions );
//
// console.log(msgBox);


// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(':memory:');
//
// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");
//
//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();
//
//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//     console.log(row.id + ": " + row.info);
//   });
// });
//
// db.close();
