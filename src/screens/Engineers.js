import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';

import SearchBar from '../components/engineer/SearchBar';
import Picker from '../components/engineer/Picker';
import Card from '../components/engineer/Card';
import Footer from '../components/Footer';

import {timeConverter} from '../helpers/script';
import {API_BASE_URL} from 'react-native-dotenv';

import RootContext from '../context';

const defaultImg =
  'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png';

function Engineers(props) {
  const {
    navigation: {navigate},
  } = props;
  const {
    engineers,
    engineersQuery: {nextPage},
    dispatch,
  } = React.useContext(RootContext);
  return (
    <>
      <Container>
        <SearchBar />
        <Content>
          <Picker />
          {engineers.map((elm, i) => (
            <Card
              handlePress={() => navigate('Engineer', elm)}
              name={elm.name}
              skills={elm.skills}
              updated={timeConverter(elm.updated)}
              salary={elm.salary}
              img={(() => (elm.img ? API_BASE_URL + elm.img : defaultImg))()}
              key={i}
            />
          ))}
          <Button
            info
            transparent
            style={s.centerH}
            onPress={() =>
              dispatch.setEngineersQuery({page: nextPage, more: true})
            }>
            <Text>load more</Text>
          </Button>
        </Content>
        <Footer active="engineers" {...props} />
      </Container>
    </>
  );
}

const s = StyleSheet.create({
  centerH: {justifyContent: 'center'},
});

Engineers.navigationOptions = {
  header: null,
};

export default Engineers;

// Kasih background putih pucet trus cardnya putih kyk di profile
// set current show pas lagi load more
