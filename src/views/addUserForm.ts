import {terminal as term} from 'terminal-kit';
import User from "../models/User";
import translate, {t} from "../services/TranslateService";

type addUserParams = {
  user: User,
}

const addUserForm = async ({user}: addUserParams) => {
  term(`\n${translate.t(t.firstName)}: `);
  user.firstName = await term.inputField().promise;

  term(`\n${translate.t(t.lastName)}: `);
  user.lastName = await term.inputField().promise;
};

export default addUserForm;
