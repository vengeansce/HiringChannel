import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Picker, Form, View} from 'native-base';

import RootContext from '../../context';

export default function Options() {
  const {
    dispatch,
    queryParam: {show, sort},
  } = React.useContext(RootContext);
  const onShowValueChange = value =>
    dispatch.setQueryParam({show: value, page: 1, more: false});
  const onSortValueChange = value =>
    dispatch.setQueryParam({sort: value, page: 1, more: false});
  return (
    <View style={s.flex}>
      <Form>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          placeholder="Show"
          // eslint-disable-next-line react-native/no-inline-styles
          placeholderStyle={{color: '#bfc6ea'}}
          placeholderIconColor="#007aff"
          style={s.sort}
          selectedValue={sort}
          onValueChange={onSortValueChange}>
          <Picker.Item label="Updated" value="updated" />
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Skills" value="skills" />
          <Picker.Item label="Salary" value="salary" />
        </Picker>
      </Form>
      <Form>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          placeholder="Show"
          // eslint-disable-next-line react-native/no-inline-styles
          placeholderStyle={{color: '#bfc6ea'}}
          placeholderIconColor="#007aff"
          style={s.show}
          selectedValue={show}
          onValueChange={onShowValueChange}>
          <Picker.Item label="10" value="10" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="50" value="50" />
        </Picker>
      </Form>
    </View>
  );
}

const s = StyleSheet.create({
  flex: {flex: 1, flexDirection: 'row-reverse'},
  show: {width: 85},
  sort: {width: 125},
});

// Sort, show telat (pake callback)
