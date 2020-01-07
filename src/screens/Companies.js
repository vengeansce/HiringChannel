import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content} from 'native-base';
import List from '../components/company/List';
import Footer from '../components/Footer';
import Card from '../components/company/Card';

import RootContext from '../context';
import {API_BASE_URL} from 'react-native-dotenv';
const defaultImg =
  'https://pngimage.net/wp-content/uploads/2018/06/icon-perusahaan-png-1.png';

function Companies(props) {
  const {companies} = React.useContext(RootContext);
  let [modalVisible, setModalVisible] = useState(false);
  let [cardData, setCardData] = useState(false);
  const handlePress = data => {
    setModalVisible(true);
    setCardData(data);
  };
  return (
    <Container>
      <Content>
        <Card
          data={cardData}
          show={modalVisible}
          backdropPress={() => setModalVisible(false)}
          backButtonPress={() => setModalVisible(false)}
        />
        <View style={s.imgList}>
          {companies.map((elm, i) => (
            <List
              img={elm.img ? API_BASE_URL + elm.img : defaultImg}
              key={i}
              handlePress={() => handlePress(elm)}
            />
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
