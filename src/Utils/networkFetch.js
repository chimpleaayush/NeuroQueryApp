import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import {store} from '../store/store';
import {isDevEnvironment} from './apiUrl';
import * as RootNavigation from '../navigation/rootNavigation';

const configuration = {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'WGBV0Lp0fZlHLBGx',
    'Cache-Control': 'no-cache',
  },
};

const instance = axios.create(configuration);

if (!isDevEnvironment) {
  instance.defaults.headers.common.Authorization = `Bearer GuestToken`;
  instance.defaults.headers.common.userId = `1234`;
}

export const loginHeaderSet = params => {
  const {userId, token} = params;
  if (!isDevEnvironment) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    instance.defaults.headers.common.userId = userId;
  }
};

const requestHandler = request => {
  console.log(request, 'request log from requesthandler');
  const storeData = store?.getState();
  if (request?.method === 'post') {
    if (
      storeData?.AppReducer?.isHomeLoad &&
      storeData?.GetProfileReducer?.profileData?.isGuest
    ) {
      RootNavigation.navigate('LoginExternal');
      return Promise.reject();
    }
  }
  if (storeData.GetProfileReducer?.profileData?.userId) {
    request.headers.userId = storeData.GetProfileReducer?.profileData?.userId;
  }

  return request;
};

instance.interceptors.request.use(request => requestHandler(request));

fileUploadConfig.interceptors.request.use(request => requestHandler(request));

const logApi = (method, url, body = '', response) => {
  // eslint-disable-next-line no-console
  console.log(
    '----------->',
    `${method} URL : ${url}\nHEADERS: `,
    body,
    `\nRESPONSE: `,
    response.data,
  );
};
const GET = async (_URL, options, header) => {
  const response = await instance.get(_URL, options);
  logApi('GET', _URL, null, response, header);
  return response;
};

const POST = async (_URL, data = null, options) => {
  let response = await instance.post(_URL, data, options);
  logApi('POST', _URL, data, response);
  return response;
};

export {GET, POST};
