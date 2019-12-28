import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Container, Content} from 'native-base';

import SearchBar from './src/components/SearchBar';
import Card from './src/components/engineer/Card';
import Footer from './src/components/Footer';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Container>
            <SearchBar />
            <Content>
              <Card
                name="William"
                skills="Tailwind CSS"
                updated="2d"
                img="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
              />
            </Content>
            <Footer />
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default App;
