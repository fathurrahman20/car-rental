import * as actionType from '../actionsType/user';

const initialState = {
  form: {
    name: '',
    email: '',
    password: '',
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.formType]: action.formValue,
        },
      };

    default:
      return state;
  }
}
