import {terminal} from 'terminal-kit';
import User from "../models/User";
import userListItem from "./userListItem";
import translate, {t} from "../services/TranslateService";

type userListParams = {
  users: User[],
}

const userList = async ({users}: userListParams) => {
  const header = [translate.t(t.ID), translate.t(t.firstName), translate.t(t.lastName), translate.t(t.books)];
  const rows = [header];

  for (const user of users) {
    rows.push(await userListItem({user}));
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
