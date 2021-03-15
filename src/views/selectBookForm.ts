import {terminal} from 'terminal-kit';
import translate, {t} from "../services/TranslateService";

type deleteBookForm = {
  callback: Function,
};

const selectBookForm = async ({callback}: deleteBookForm) => {
  terminal(`${translate.t(t.ASIN)} :`);
  const id = await terminal.inputField().promise;
  callback(id);
  terminal('\n');
};

export default selectBookForm;

