import {terminal as term} from 'terminal-kit';
import Book from "../models/Book";
import translate, {t} from "../services/TranslateService";

type addBookParams = {
  book: Book,
}

const addBookForm = async ({book}: addBookParams) => {

  term(`\n${translate.t(t.ASIN)}: `);
  book.ASIN = await term.inputField().promise;
  term('\n');

  term(`\n${translate.t(t.title)}: `);
  book.title = await term.inputField().promise;

  term(`\n${translate.t(t.author)}: `);
  book.author = await term.inputField().promise;

  term(`\n${translate.t(t.publishYear)}: `);
  book.publishYear = await term.inputField().promise;
  term('\n');

  term(`\n${translate.t(t.language)}: `);
  book.language = await term.inputField().promise;
  term('\n');

  term(`\n${translate.t(t.pages)}: `);
  book.pages = await term.inputField().promise;
  term('\n');
};

export default addBookForm;
