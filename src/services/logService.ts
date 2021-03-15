import fs from 'fs';

export default class LogService {

  actionFile: string;
  errorFile: string;

  constructor(actionFile, errorFile) {
    this.actionFile = actionFile;
    this.errorFile = errorFile;
  }

  log(action: string, data: object = {}) {
    fs.appendFile(this.actionFile, 'Time: ' + Date.now().toString() + '. Action: : ' + action + '. Data: ' + JSON.stringify(data) + '\n', () => {
    });
  }

  error(e: Error) {
    fs.appendFile(this.errorFile, 'Time: ' + Date.now().toString() + '. Error: ' + e.message + '. Stack: ' + e.stack + '\n', () => {
    });
  }
}
