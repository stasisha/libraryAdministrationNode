import {terminal} from 'terminal-kit';

type deleteBookForm = {
  callback: Function,
};

const selectBookForm = async ({callback}: deleteBookForm) => {
  terminal('Enter book ASIN:');
  const id = await terminal.inputField().promise;
  callback(id);
  terminal('\n');
};

export default selectBookForm;

