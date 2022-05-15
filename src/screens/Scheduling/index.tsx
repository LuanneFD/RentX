import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  Title
} from './styles'


export function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} color={theme.colors.shape} />
        <Title>Escolha uma {'\n'}
          data de início e  {'\n'}
          fim do aluguel</Title>
      </Header>
    </Container>
  )
};