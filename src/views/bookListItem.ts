import Book from "../models/Book";

type bookListItemParams = {
  book: Book,
}

const bookListItem = ({book}: bookListItemParams): string[] => {
  return [book.ASIN, book.title, book.author, book.publishYear.toString(), book.language, book.pages.toString()];
};

export default bookListItem;
