import User from "../models/User";

type userListItemParams = {
  user: User,
}

const userListItem = ({user}: userListItemParams): string[] => {
  return [user.id?.toString(), user.firstName, user.lastName, user.books.map((book) => book.title).join(',')];
};

export default userListItem;
