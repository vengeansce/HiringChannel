import {StyleSheet} from 'react-native';
const s = StyleSheet.create({
  camera: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  dateText: {color: 'green'},
  date: {
    fontSize: 17,
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
  },
  datePlaceholder: {
    color: '#d3d3d3',
  },
  datePicker: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  relative: {position: 'relative'},
  centerX: {alignItems: 'center'},
  my: {marginVertical: 10},
  py2: {paddingVertical: 20},
  px: {paddingHorizontal: 10},
  px2: {paddingHorizontal: 20},
  pr: {paddingRight: 5},
});

export default s;
