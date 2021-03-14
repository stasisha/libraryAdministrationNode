import render from "../helpers/render";
import {terminal} from 'terminal-kit';
import User from "../models/User";
import userListItem from "./userListItem";

type userListParams = {
  users: User[],
}

const userList = async ({users}: userListParams) => {
  const header = ['ID', 'First Name', 'Last Name', 'Books'];
  const rows = [header];

  for (const user of users) {
    rows.push(await render(userListItem, {user}));
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

export default userList;
