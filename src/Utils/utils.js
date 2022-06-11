/* eslint-disable no-param-reassign */
import React, {useEffect} from 'react';
import {
  Dimensions,
  BackHandler,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
  AppState,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import moment from 'moment';
import {Color, Font} from '../asset';
import {store} from '../store/store';

const {width} = Dimensions.get('window');

const Stack = createStackNavigator();

export const useAppStateEffect = handleAppStateCB => {
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateCB);
    return () => {
      AppState.removeEventListener('change', handleAppStateCB);
    };
  }, [handleAppStateCB]);
};

export const useEffectAtEveryChange = ({
  cb = () => {},
  cleanupCb = () => {},
  args = [],
}) => {
  useEffect(() => {
    cb();
    return () => {
      cleanupCb();
    };
  }, [...args, cb, cleanupCb]);
};

export const useBackButton = handler => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
};

// function to be called whenever there is need of creating a stack navigator arguments to be passed are
/**
 *
 * @param {screenName: componentName} screens
 * @param customScreenOptions
 * @param customOptions
 */
export const createCustomScreenStack = ({
  screens,
  customScreenOptions = {headerMode: false},
  customOptions = {},
}) => {
  return (
    <Stack.Navigator screenOptions={customScreenOptions}>
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen
          options={customOptions}
          key={name}
          name={name}
          component={component}
        />
      ))}
    </Stack.Navigator>
  );
};

const scale = size => (width / 340) * size;
export const normalize = (size, factor = 0.15) =>
  size + (scale(size) - size) * factor;

export const formatNumber = n => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return `${+(n / 1e3).toFixed(1)}K`;
  if (n >= 1e6 && n < 1e9) return `${+(n / 1e6).toFixed(1)}M`;
  if (n >= 1e9 && n < 1e12) return `${+(n / 1e9).toFixed(1)}B`;
  if (n >= 1e12) return `${+(n / 1e12).toFixed(1)}T`;
};

/**
 * @name requestCameraAndAudioPermission
 * @description Function to request permission for Audio and Camera
 */
export default async function requestCameraAndAudioPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    if (
      granted['android.permission.RECORD_AUDIO'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.CAMERA'] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('You can use the cameras & mic');
    } else {
      console.log('Permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

export function isEmpty(obj) {
  // console.log(typeof(obj));
  if (obj !== null && obj !== undefined) {
    // for general objects
    if (typeof obj === 'string') {
      if (obj.trim() === '' || obj == 'null') {
        // for string
        return true;
      }

      return false;
    }
    if (obj.length <= 0) {
      // for array
      return true;
    }
    if (typeof obj === 'object') {
      const keys = Object.keys(obj);
      const len = keys.length;
      if (len <= 0) {
        return true;
      }
      return false;
    }
    return false;
  }

  return true;
}

const month_names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getDateMonthYear(timeStamp) {
  const date = timeStamp.getDate();
  const year = timeStamp.getFullYear();
  const months = month_names[timeStamp.getMonth()];
  return `${date} ${months} ${year} `;
}

export function getTimeInAMPM(timeStamp) {
  return moment.unix(timeStamp / 1000).format('hh:mm a') || '';
}

export function filterImageUrl(stringInput) {
  if (!isEmpty(stringInput)) {
    const imageArray = stringInput.match(
      /(http(s?):)([/|.|\w|\s|-])*\.(?:JPEG|gif|png)/g,
    );
    return imageArray;
  }
  return [];
}

export function filterVideoUrl(stringInput) {
  const isMp4Video = stringInput.test(
    /(http(s?):)([/|.|\w|\s|-])*\.(?:MP4|mp4)/g,
  );
  return isMp4Video;
}

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

export const getQueryStringParameters = url => {
  try {
    if (url && url.split('?').length > 0) {
      const query = url.split('?')[1];
      return (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
          const [key, value] = param.split('=');
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, ' '))
            : '';
          return params;
        }, {});
    }
    return {};
  } catch (err) {
    //
  }
};

export const getAllYoutubeLink = text => {
  const re =
    /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi;
  return text.match(re);
};

export const YouTubeGetID = url => {
  let ID = '';
  url = url
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
};

export const getSlotDate = dateInString => {
  return dateInString.split('-')[2].split(',')[0];
};
export const getSlotDay = dateInString => {
  return dateInString.split('-')[2].split(',')[1][1];
};
