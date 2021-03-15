export const t = {
  bookList: 'bookList',
  addBook: 'addBook',
  deleteBook: 'deleteBook',
  userList: 'userList',
  addUser: 'addUser',
  assignBookToUser: 'assignBookToUser',
  exit: 'exit',
  ASIN: 'ASIN',
  title: 'title',
  author: 'author',
  publishYear: 'publishYear',
  language: 'language',
  pages: 'pages',
  ID: 'ID',
  firstName: 'firstName',
  lastName: 'lastName',
  books: 'books'
}

const language = 'uk-UA';

export default class TranslateService {
  static t(key: string) {
    const dictionary = {
      'uk-UA': {
        bookList: 'Список книг',
        addBook: 'Додати книгу',
        deleteBook: 'Видалити книгу',
        userList: 'Список користувачів',
        addUser: 'Додати користувача',
        assignBookToUser: 'Додати книгу користувачу',
        exit: 'Вихід',
        ASIN: 'ASIN',
        title: 'Назва',
        author: 'Автор',
        publishYear: 'Рік видавництава',
        language: 'Мова',
        pages: 'Кільскість сторінок',
        ID: 'ID',
        firstName: "Ім'я",
        lastName: 'Прізвище',
        books: 'Книги'
      },
      'en-GB': {
        bookList: 'Book list',
        addBook: 'Add book',
        deleteBook: 'Delete book',
        userList: 'User list',
        addUser: 'Add user',
        assignBookToUser: 'Assign book to user',
        exit: 'Exit',
        ASIN: 'ASIN',
        title: 'Title',
        author: 'Author',
        publishYear: 'Publish Year',
        language: 'Language',
        pages: 'Pages',
        ID: 'ID',
        firstName: 'First Name',
        lastName: 'Last Name',
        books: 'Books'
      }
    };

    return dictionary[language][key];
  }
}
