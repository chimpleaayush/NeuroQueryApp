import ACTION_TYPES from './actionTypes';

const initialState = {
  loader: false,
};

const appReducer = (state = initialState, action) => {
  let oldState = state;
  switch (action.type) {
    case ACTION_TYPES.SET_LOADER:
      oldState.loader = action.payload;
      return oldState;
    default:
      return state;
  }
};

export default appReducer;
