import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Content} from 'native-base';

import SearchBar from '../components/SearchBar';
import Card from '../components/engineer/Card';
import Footer from '../components/Footer';

import {timeConverter} from '../helpers/script';
import {API_ENGINEER_ENDPOINT, API_BASE_URL} from 'react-native-dotenv';

function Engineers(props) {
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    axios
      .get(API_ENGINEER_ENDPOINT)
      .then(res => setEngineers(res.data.values.result))
      .catch(err => console.warn(err));
  }, []);
  return (
    <>
      <Container>
        <SearchBar />
        <Content>
          {engineers.map((elm, i) => (
            <Card
              name={elm.name}
              skills={elm.skills}
              updated={timeConverter(elm.updated)}
              salary={elm.salary}
              img={API_BASE_URL + elm.img}
              key={i}
            />
          ))}
        </Content>
        <Footer active="engineers" {...props} />
      </Container>
    </>
  );
}

Engineers.navigationOptions = {
  header: null,
};

export default Engineers;
