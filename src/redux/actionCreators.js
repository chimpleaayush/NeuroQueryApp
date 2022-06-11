import {GET, POST} from '../Utils/networkFetch';
import {setLoader} from './actions';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const actionCreator = url => dispatch => {
//   return new Promise(() => {
//     axios
//       .get(`${base_url_3x00}/${url}`)
//       .then(response => {
//         dispatch(fetchSuccess(response.data));
//       })
//       .catch(error => {
//         dispatch(fetchError(error));
//       });
//   });
// };
