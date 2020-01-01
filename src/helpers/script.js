import AsyncStorage from '@react-native-community/async-storage';

const sessionCheck = async _ => {
  try {
    return await AsyncStorage.getAllKeys().length;
  } catch (err) {
    return 0;
  }
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

export {timeConverter, validExtension, sessionCheck};
