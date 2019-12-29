import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Content} from 'native-base';

import SearchBar from '../components/SearchBar';
import Card from '../components/engineer/Card';
import Footer from '../components/Footer';

function Engineers(props) {
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    axios
      .get('http://192.168.1.19:8000/api/v1/engineers')
      .then(res => setEngineers(res.data.values.result))
      .catch(err => console.warn(err));
  });
  return (
    <>
      <Container>
        <SearchBar />
        <Content>
          {engineers.map((elm, i) => (
            <Card
              name={elm.name}
              skills={elm.skills}
              updated="2d"
              img="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
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
// Error ngerequest trus
