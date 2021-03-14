const render = async (template: Function, params: object) => {
  return await template(params);
}

export default render;
