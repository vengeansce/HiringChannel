import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ImageBackground, View} from 'react-native';
import {
  Container,
  Text,
  Content,
  Header,
  Body,
  Right,
  Title,
  Item,
  Input,
  Form,
  Textarea,
  Button,
  Icon,
} from 'native-base';
import Footer from '../Footer';

import {
  toastr,
  fetchCompany,
  getMultipleDataStorage,
  clearSession,
  launchImageLibrary,
} from '../../helpers/script';
import {API_BASE_URL, API_ENDPOINT} from 'react-native-dotenv';
import s from '../../style/Profile';
const defaultImg =
  'https://pngimage.net/wp-content/uploads/2018/06/icon-perusahaan-png-1.png';

const Account = props => {
  const {
    navigation: {navigate},
  } = props;
  let [company, setCompany] = useState({
    name: '',
    location: '',
    img: '',
    email: '',
    description: '',
    id: '',
    token: '',
  });
  useEffect(() => {
    setProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setProfile = () => {
    getMultipleDataStorage(['id', 'token'], values => {
      const id = values[0][1];
      const token = values[1][1];
      if (id !== null) {
        fetchCompany(id, data => {
          if (data) {
            const uri = data.img ? API_BASE_URL + data.img : defaultImg;
            setCompany({
              ...data,
              img: {uri, type: 'image/jpeg', name: uri},
              id,
              token,
            });
          } else {
            navigate('Login');
          }
        });
      } else {
        navigate('Login');
      }
    });
  };
  const updateProfile = () => {
    const form = new FormData();
    form.append('name', company.name);
    form.append('description', company.description);
    form.append('location', company.location);
    form.append('img', company.img);
    form.append('id', company.id);

    axios
      .put(`${API_ENDPOINT}?token=${company.token}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        setProfile();
        toastr('Profile updated successfully', 'success');
      })
      .catch(() => {
        // toastr('File too large. Max: 1mb');
        toastr('Please choose a picture again.');
      });
  };
  function pickImage() {
    launchImageLibrary(res => {
      const {fileName, type, uri} = res;
      setCompany({
        ...company,
        img: {uri, type, name: fileName},
      });
    });
  }
  return (
    <Container>
      <Header>
        <Body>
          <Title>Account Settings</Title>
        </Body>
        <Right>
          <Button
            hasText
            danger
            transparent
            onPress={() => clearSession(() => navigate('Login'))}>
            <Text>Logout</Text>
          </Button>
        </Right>
      </Header>
      <Content style={s.px}>
        <View style={[s.centerX, s.py2]}>
          <ImageBackground
            source={{
              uri: company.img.uri,
            }}
            style={[s.img, s.relative]}
            imageStyle={s.imageBackground}>
            <Button style={[s.camera, s.center]} onPress={pickImage}>
              <Icon name="camera" style={s.cameraIcon} />
            </Button>
            {/* //If file exist but image doesn't show up */}
            <ImageBackground
              source={{
                uri: defaultImg,
              }}
              style={[s.img, s.defaulImg]}
              imageStyle={s.imageBackground}
            />
          </ImageBackground>
        </View>
        <View>
          <Text>Description</Text>
          <Form>
            <Textarea
              rowSpan={3}
              bordered
              placeholder="About company"
              value={company.description}
              onChangeText={text => setCompany({...company, description: text})}
            />
          </Form>
        </View>
        <View>
          <Item>
            <Input
              value={company.name}
              onChangeText={text => setCompany({...company, name: text})}
            />
            <Text style={s.pr}>Name</Text>
          </Item>
          <Item>
            <Input
              value={company.location}
              onChangeText={text => setCompany({...company, location: text})}
            />
            <Text style={s.pr}>Address</Text>
          </Item>
        </View>
        <View style={s.px2}>
          <Button success block style={s.my} onPress={updateProfile}>
            <Text>Update</Text>
          </Button>
          <Button
            danger
            block
            style={s.my}
            onPress={() => alert('Eits, tidak bisa!')}>
            <Text>Delete Account</Text>
          </Button>
        </View>
      </Content>
      <Footer active="account" {...props} />
    </Container>
  );
};

export default Account;
