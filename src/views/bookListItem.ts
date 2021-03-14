import Book from "../models/Book";

type bookListItemParams = {
  book: Book,
}

const bookListItem = ({book}: bookListItemParams) => {
  return [book.ASIN, book.title, book.author, book.publishYear, book.language, book.pages];
};

export default bookListItem;
