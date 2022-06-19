import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';

import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { useAuth } from '../../hooks/auth';
import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section
} from './styles';


export function Profile() {
  const { user } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [driverlicense, setDriverLicense] = useState(user.driver_license);

  function handleBack() {
    navigation.goBack();
  }

  function handleSignOut() {

  }

  function handleOptionChange(option: 'dataEdit' | 'passwordEdit') {
    setOption(option);
  }

  async function handleSelectAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    });

    if (result.cancelled) { return; }
    if (result.uri) {
      setAvatar(result.uri);
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton color={theme.colors.shape} onPress={handleBack} />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <LogoutButton onPress={handleSignOut} >
                <Feather name="power" size={24} color={theme.colors.shape} />
              </LogoutButton>
            </HeaderTop>
            <PhotoContainer>
              <Photo source={{ uri: avatar }} />
              <PhotoButton onPress={handleSelectAvatar} >
                <Feather name="camera" size={24} color={theme.colors.shape} />
              </PhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <Options>
              <Option active={option === 'dataEdit'} onPress={() => handleOptionChange('dataEdit')}>
                <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
              </Option>
              <Option active={option === 'passwordEdit'} onPress={() => handleOptionChange('passwordEdit')} >
                <OptionTitle active={option === 'passwordEdit'}>Trocar Senha</OptionTitle>
              </Option>
            </Options>
            {
              option === 'dataEdit' ?
                <Section>
                  <Input defaultValue={user.name} value={name} onChangeText={setName} iconName='user' placeholder='Nome' autoCorrect={false} />
                  <Input defaultValue={user.email} iconName='mail' editable={false} autoCorrect={false} />
                  <Input defaultValue={user.driver_license} value={driverlicense} onChangeText={setDriverLicense} iconName='credit-card' placeholder='CNH' keyboardType='numeric' />
                </Section>
                :
                <Section>
                  <InputPassword value={oldPassword} onChangeText={setOldPassword} iconName='lock' placeholder='Senha atual' />
                  <InputPassword value={newPassword} onChangeText={setNewPassword} iconName='lock' placeholder='Nova Senha' />
                  <InputPassword value={confirmNewPassword} onChangeText={setConfirmNewPassword} iconName='lock' placeholder='Repetir Senha' />
                </Section>
            }
          </Content>
        </Container >
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  )
};