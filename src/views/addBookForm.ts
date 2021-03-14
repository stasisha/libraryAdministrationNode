import {terminal as term} from 'terminal-kit';
import Book from "../models/Book";

type addBookParams = {
  book: Book,
}

const addBookForm = async ({book}: addBookParams) => {

  term('\nASIN: ');
  book.ASIN = await term.inputField().promise;
  term('\n');

  term('Title: ');
  book.title = await term.inputField().promise;

  term('\nAuthor: ');
  book.author = await term.inputField().promise;

  term('\nYear: ');
  book.publishYear = await term.inputField().promise;
  term('\n');

  term('\nLanguage: ');
  book.language = await term.inputField().promise;
  term('\n');

  term('\nPages: ');
  book.pages = await term.inputField().promise;
  term('\n');
};

export default addBookForm;
