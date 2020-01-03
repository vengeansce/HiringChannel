import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import {Toast} from 'native-base';

import {
  API_ENGINEER_ENDPOINT,
  API_EMPLOYEE_ENDPOINT,
} from 'react-native-dotenv';

const toastr = (message, type) => {
  Toast.show({
    text: message,
    buttonText: 'Okay',
    type,
  });
};

const sessionCheck = async _ => {
  try {
    return await AsyncStorage.getAllKeys().length;
  } catch (err) {
    return 0;
  }
};

const clearSession = async callback => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    toastr('Ops, something error');
  }

  callback();
};

const getDataStorage = async (item, callback) => {
  try {
    const value = await AsyncStorage.getItem(item);
    callback(value);
  } catch (err) {
    callback(null);
  }
};

const fetchEngineer = (id, callback) => {
  axios
    .get(`${API_ENGINEER_ENDPOINT}/${id}`)
    .then(res => {
      const {values} = res.data;
      if (values.length > 0) {
        callback(values[0]);
      } else {
        callback(null);
      }
    })
    .catch(() => callback(null));
};

const fetchEmployee = (id, callback) => {
  axios
    .get(`${API_EMPLOYEE_ENDPOINT}/${id}`)
    .then(res => {
      const {values} = res.data;
      if (values.length > 0) {
        callback(values[0]);
      } else {
        callback(null);
      }
    })
    .catch(() => {
      callback(null);
    });
};

function timeConverter(menit) {
  const hari = 60 * 24;
  const bulan = hari * 30;
  const tahun = bulan * 12;
  if (menit > tahun) {
    return `${Math.round(menit / tahun)} years ago`;
  }
  if (menit > bulan) {
    return `${Math.round(menit / bulan)} months ago`;
  }
  if (menit > hari) {
    return `${Math.round(menit / hari)} days ago`;
  }
  if (menit > 60) {
    return `${Math.round(menit / 60)}hours ago`;
  }
  if (menit === 0) {
    return 'A few seconds ago';
  }
  return 'A few minutes ago';
}

function validExtension(ext, acceptableExts) {
  // eslint-disable-next-line no-unused-vars
  for (const acceptExt of acceptableExts) {
    if (acceptExt === ext) {
      return true;
    }
  }
  return false;
}

export {
  timeConverter,
  validExtension,
  sessionCheck,
  clearSession,
  fetchEngineer,
  fetchEmployee,
  getDataStorage,
  toastr,
};
