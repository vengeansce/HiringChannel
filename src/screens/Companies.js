import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content} from 'native-base';
import Card from '../components/company/Card';
import Footer from '../components/Footer';

import RootContext from '../context';
import {API_BASE_URL} from 'react-native-dotenv';
const defaultImg =
  'https://pngimage.net/wp-content/uploads/2018/06/icon-perusahaan-png-1.png';

function Companies(props) {
  const {companies, dispatch} = React.useContext(RootContext);
  return (
    <Container>
      <Content padder>
        <View style={s.imgList}>
          {companies.map((elm, i) => (
            <Card img={elm.img ? API_BASE_URL + elm.img : defaultImg} key={i} />
          ))}
          {companies.map((elm, i) => (
            <Card img={elm.img ? API_BASE_URL + elm.img : defaultImg} key={i} />
          ))}
          {companies.map((elm, i) => (
            <Card img={elm.img ? API_BASE_URL + elm.img : defaultImg} key={i} />
          ))}
          {companies.map((elm, i) => (
            <Card img={elm.img ? API_BASE_URL + elm.img : defaultImg} key={i} />
          ))}
          {companies.map((elm, i) => (
            <Card img={elm.img ? API_BASE_URL + elm.img : defaultImg} key={i} />
          ))}
          {companies.map((elm, i) => (
            <Card img={elm.img ? API_BASE_URL + elm.img : defaultImg} key={i} />
          ))}
          {companies.map((elm, i) => (
            <Card img={elm.img ? API_BASE_URL + elm.img : defaultImg} key={i} />
          ))}
        </View>
      </Content>
      <Footer active="companys" {...props} />
    </Container>
  );
}

const s = StyleSheet.create({
  imgList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hFull: {height: '100%'},
});

Companies.navigationOptions = {
  header: null,
};

export default Companies;
