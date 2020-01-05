import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FormData from 'form-data';
import moment from 'moment';
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
  DatePicker,
  Form,
  Textarea,
  Button,
  Icon,
} from 'native-base';
import Footer from '../Footer';

import {
  fetchEngineer,
  getMultipleDataStorage,
  clearSession,
  toastr,
  validExtension,
} from '../../helpers/script';
import {API_BASE_URL, API_ENDPOINT} from 'react-native-dotenv';
import s from '../../style/Profile';

import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Profile Picture',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const defaultImg =
  'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png';

const Account = props => {
  const {
    navigation: {navigate},
  } = props;
  let [engineer, setEngineer] = useState({
    name: '',
    skills: '',
    salary: '',
    location: '',
    birthdate: '',
    img: '',
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
        fetchEngineer(id, data => {
          if (data) {
            setEngineer({
              ...data,
              birthdate: data.birthdate.split('T')[0],
              img: {uri: data.img ? API_BASE_URL + data.img : defaultImg},
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
    form.append('name', engineer.name);
    form.append('description', engineer.description);
    form.append('location', engineer.location);
    form.append('skills', engineer.skills);
    form.append('birthdate', engineer.birthdate);
    form.append('img', engineer.img);
    form.append('salary', engineer.salary);
    form.append('id', engineer.id);

    axios
      .put(`${API_ENDPOINT}?token=${engineer.token}`, form, {
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
        toastr('Ops, something error.');
      });
  };
  function chooseImage() {
    ImagePicker.showImagePicker(options, res => {
      if (!res.didCancel && !res.error && !res.customButton) {
        const {fileName, fileSize, type, uri} = res;
        const split = fileName.split('.');
        const ext = split[split.length - 1].toLocaleLowerCase();
        const acceptableExts = ['png', 'jpg', 'jpeg'];
        if (validExtension(ext, acceptableExts) !== true) {
          toastr('File not accepted.');
        } else if (fileSize > 1024 * 1024) {
          toastr('File too large.');
        } else {
          setEngineer({
            ...engineer,
            img: {uri, type, name: fileName},
          });
        }
      }
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
              uri: engineer.img.uri,
            }}
            style={[s.img, s.relative]}>
            <Button rounded style={s.camera} onPress={chooseImage}>
              <Icon name="camera" />
            </Button>
          </ImageBackground>
        </View>
        <View>
          <Text>About Me</Text>
          <Form>
            <Textarea
              rowSpan={3}
              bordered
              placeholder="Make it as long and as crazy as you'd like"
              value={engineer.description}
              onChangeText={text =>
                setEngineer({...engineer, description: text})
              }
            />
          </Form>
        </View>
        <View>
          <Item>
            <Input
              value={engineer.name}
              onChangeText={text => setEngineer({...engineer, name: text})}
            />
            <Text style={s.pr}>Name</Text>
          </Item>
          <Item>
            <Input
              placeholder="e.g., Java, C++, Tailwind CSS"
              value={engineer.skills}
              onChangeText={text => setEngineer({...engineer, skills: text})}
            />
            <Text style={s.pr}>Skills</Text>
          </Item>
          <Item>
            <View style={s.datePicker}>
              <DatePicker
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText={engineer.birthdate}
                textStyle={[s.dateText, s.date]}
                placeHolderTextStyle={[s.datePlaceholder, s.date]}
                onDateChange={date =>
                  setEngineer({
                    ...engineer,
                    birthdate: moment(date).format('YYYY-MM-DD'),
                  })
                }
                disabled={false}
              />
            </View>
            <Text style={s.pr}>Birthdate</Text>
          </Item>
          <Item>
            <Input
              placeholder="Expected salaries"
              keyboardType="numeric"
              value={engineer.salary.toString()}
              onChangeText={text => setEngineer({...engineer, salary: text})}
            />
            <Text style={s.pr}>($)</Text>
          </Item>
          <Item>
            <Input
              placeholder="e.g., Babelan"
              value={engineer.location}
              onChangeText={text => setEngineer({...engineer, location: text})}
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
