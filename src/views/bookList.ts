import {terminal} from 'terminal-kit';
import bookListItem from "./bookListItem";
import Book from "../models/Book";

type bookListParams = {
  books: Book[],
}

const bookList = async ({books}: bookListParams) => {
  const header = ['ASIN', 'Title', 'Author', 'Publish Year', 'Language', 'Pages'];
  const rows = [header];

  for (const book of books) {
    rows.push(await bookListItem({book}));
  }

  terminal.table(rows, {
        hasBorder: true,
        contentHasMarkup: true,
        borderChars: 'lightRounded',
        borderAttr: {color: 'white'},
        width: 60
      }
  );
};

export default bookList;
