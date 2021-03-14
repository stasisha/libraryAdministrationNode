import {terminal as term} from 'terminal-kit';
import User from "../models/User";

type addUserParams = {
  user: User,
}

const addUserForm = async ({user}: addUserParams) => {
  term('First Name: ');
  user.firstName = await term.inputField().promise;

  term('\nLast Name: ');
  user.lastName = await term.inputField().promise;
};

export default addUserForm;
