import {terminal} from 'terminal-kit';

type menuParams = {
  items: string[],
  menuCallback: Function
}

const menu = async ({items, menuCallback}: menuParams) => {
  await terminal.singleColumnMenu(items, menuCallback).promise;
};

export default menu;
