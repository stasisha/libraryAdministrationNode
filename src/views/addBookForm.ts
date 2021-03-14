import {terminal as term} from 'terminal-kit';
import Book from "../models/Book";

type addBookParams = {
  book: Book,
}

const addBookForm = async ({book}: addBookParams) => {
  term('Title: ');
  book.title = await term.inputField().promise;

  term('\nAuthor: ');
  book.author = await term.inputField().promise;

  term('\nYear: ');
  book.publishYear = await term.inputField().promise;
  term('\n');
};

export default addBookForm;
