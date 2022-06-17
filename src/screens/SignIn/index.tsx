import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import theme from '../../styles/theme';
import {
  Container, Header, Title, SubTitle, Footer, Form
} from './styles'


export function SignIn() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Header>
        <Title>Estamos{'\n'}quase lá.</Title>
        <SubTitle>Faça seu login para começar{'\n'}uma experiência incrível.</SubTitle>
      </Header>

      <Form>
        <Input iconName="mail" placeholder="E-mail" keyboardType='email-address' autoCorrect={false} autoCapitalize="none"></Input>
        <InputPassword iconName="lock" placeholder="Senha" />
      </Form>

      <Footer>
        <Button title="Login" onPress={() => { }} />
        <Button title="Criar conta gratuita" ligth color={theme.colors.background_secondary} onPress={() => { }} />
      </Footer>
    </Container>
  )
};