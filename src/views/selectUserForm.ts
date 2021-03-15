import {terminal} from 'terminal-kit';
import translate, {t} from "../services/TranslateService";

type selectUserFormParams = {
  callback: Function,
};

const selectUserForm = async ({callback}: selectUserFormParams) => {
  terminal(`${translate.t(t.ID)} :`);
  const id = await terminal.inputField().promise;
  callback(id);
  terminal('\n');
};

export default selectUserForm;

