export const activateComponent = (componentClass) => {
  return {
    type: 'ACTIVATE_COMPONENT',
    payload: componentClass
  }
}

export const loadComponentsAdmin = (components) => {
  return {
    type: 'LOAD_COMPONENTS_ADMIN',
    payload: components
  }
}
