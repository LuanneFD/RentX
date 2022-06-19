import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { useNavigation } from '@react-navigation/native';
import theme from '../../styles/theme';
import { useAuth } from '../../hooks/auth';
import * as Yup from 'yup';


import {
  Container, Header, Title, SubTitle, Footer, Form
} from './styles'

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();
  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),

        password: Yup.string()
          .required('A senha é obrigatória')
      });

      await schema.validate({ email, password });
      signIn({ email, password });
    }
    catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      }
      else {
        Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, verifique as credenciais.');
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate('FirstStep');
  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          <Header>
            <Title>Estamos{'\n'}quase lá.</Title>
            <SubTitle>Faça seu login para começar{'\n'}uma experiência incrível.</SubTitle>
          </Header>

          <Form>
            <Input
              onChangeText={setEmail}
              value={email}
              iconName="mail"
              placeholder="E-mail"
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize="none" />

            <InputPassword
              onChangeText={setPassword}
              value={password}
              iconName="lock"
              placeholder="Senha" />

          </Form>

          <Footer>
            <Button title="Login" onPress={handleSignIn} />
            <Button title="Criar conta gratuita" ligth color={theme.colors.background_secondary} onPress={handleNewAccount} />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
};