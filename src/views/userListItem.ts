import User from "../models/User";

type userListItemParams = {
  user: User,
}

const userListItem = ({user}: userListItemParams) => {
  console.log('user', user);
  return [user.id, user.firstName, user.lastName, user.books.map((book) => book.title).join(',')];
};

export default userListItem;
