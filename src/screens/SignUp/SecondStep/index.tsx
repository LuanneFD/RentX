import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { InputPassword } from '../../../components/InputPassword';
import api from '../../../services/api';

import {
  Container,
  Header,
  Steps,
  Form,
  FormTitle
} from './styles'

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SecondStep() {
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<any>();
  const theme = useTheme();
  const route = useRoute();

  const { user } = route.params as Params;

  async function handleRegister() {
    if (!password || !confirmPassword) {
      return Alert.alert("Informe a senha e a confirmação.");
    }
    if (password != confirmPassword) {
      return Alert.alert("As senhas não correspondem.");
    }

    await api.post('/users', { name: user.name, email: user.email, driver_license: user.driverLicense, password })
      .then(() => {
        navigation.navigate('Confirmation', { title: 'Conta criada!', message: `Agora é só fazer login\ne aproveitar.`, nextSreenRoute: 'SignIn' });
      })
      .catch((error) => {
        return Alert.alert('Opa', 'Não foi possível cadastrar.');
      });
  }

  function handleBack() {
    navigation.goBack();
  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          <Header>
            <BackButton onPress={handleBack} />

            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <InputPassword
              iconName="lock"
              placeholder='Senha'
              value={password}
              onChangeText={setpassword}
              autoCorrect={false}
              autoCapitalize="none" />

            <InputPassword
              iconName="lock"
              placeholder='Repetir Senha'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              autoCorrect={false}
              autoCapitalize="none" />
          </Form>
          <Button title='Cadastrar' color={theme.colors.success} onPress={handleRegister} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
};