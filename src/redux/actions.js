import ACTION_TYPES from './actionTypes';

export const setLoader = () => ({
  type: ACTION_TYPES.SHOW_LOADER,
  payload: true,
});
