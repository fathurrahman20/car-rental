import * as actionType from '../actionsType/admin';

const initialState = {
  allData: null,
  smallData: null,
  mediumData: null,
  largeData: null,
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_ALL_DATA:
      return {
        ...state,
        allData: action.data,
      };
    case actionType.SET_SMALL_DATA:
      return {
        ...state,
        smallData: action.data,
      };
    case actionType.SET_MEDIUM_DATA:
      return {
        ...state,
        mediumData: action.data,
      };
    case actionType.SET_LARGE_DATA:
      return {
        ...state,
        largeData: action.data,
      };
    default:
      return state;
  }
}
