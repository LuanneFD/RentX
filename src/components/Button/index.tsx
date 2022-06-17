import React from 'react';
import { useTheme } from 'styled-components';
import { TouchableOpacityProps } from 'react-native';
import { Load } from '../Load';
import {
  Container,
  Title
} from './styles'


interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  ligth?: boolean;
}

export function Button({ title, color, ligth = false, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest} color={color ? color : theme.colors.main}>
      <Title ligth={ligth}>{title}</Title>
    </Container>
  )
};