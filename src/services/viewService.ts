export default class ViewService {

  render = async (template: Function, params: object) => {
    return await template(params);
  }

}
