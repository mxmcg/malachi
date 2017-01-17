const initialState = {
  username: null,
  password: null
};

export default function loginReducers (state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_LOGIN_FORM':
      return Object.assign({}, state, action.payload);
    case 'SUBMIT_LOGIN_FORM':
      return Object.assign({}, state, action.payload);
    default:
      return state;
    }
}
