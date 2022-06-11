import {createCustomScreenStack} from '../Utils/utils';

const StackInit = (preLoginScreens, postLoginStack, isLoggedIn) => {
  const appStackScreens = isLoggedIn
    ? {...postLoginStack}
    : {...preLoginScreens};
  return createCustomScreenStack({screens: appStackScreens});
};

export default StackInit;
