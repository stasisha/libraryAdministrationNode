import {terminal} from 'terminal-kit';

type selectUserFormParams = {
  callback: Function,
};

const selectUserForm = async ({callback}: selectUserFormParams) => {
  terminal('Enter user ID:');
  const id = await terminal.inputField().promise;
  callback(id);
  terminal('\n');
};

export default selectUserForm;

