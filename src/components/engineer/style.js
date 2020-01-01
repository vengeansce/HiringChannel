import {StyleSheet} from 'react-native';

const mx = 17;

const style = StyleSheet.create({
  primaryColor: {color: '#007aff'},
  avatar: {borderRadius: 9},
  list: {
    marginRight: mx,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRight: {textAlign: 'right'},
  flex: {flex: 1, flexDirection: 'row'},
  hFull: {height: '100%'},
  w1_2: {width: '50%'},
  px2: {paddingHorizontal: mx},
  my2: {marginVertical: 7},
  _pt: {paddingTop: 0},
  _pr: {paddingRight: 0},
  _ml_1: {marginLeft: -mx},
  _mr_1: {marginRight: -mx},
  _mr: {marginRight: 0},
  fz3: {fontSize: 36},
  noBorder: {borderBottomWidth: 0},
});

// function elevationShadowStyle(elevation) {
//   return {
//     elevation,
//     shadowColor: 'black',
//     shadowOffset: {width: 0, height: 0.5 * elevation},
//     shadowOpacity: 0.3,
//     shadowRadius: 0.8 * elevation,
//   };
// }

export default style;
