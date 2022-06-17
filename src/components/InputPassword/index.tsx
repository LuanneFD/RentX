import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
import {
  Container, InputText, IconContainer
} from './styles'

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export function InputPassword({ iconName, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const theme = useTheme();

  function handlePasswordVisibility() {
    setIsPasswordVisible(prevState => !prevState);
  }
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} secureTextEntry={isPasswordVisible} />

      <IconContainer>
        <BorderlessButton onPress={handlePasswordVisibility}>
          <Feather name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color={theme.colors.text_detail} />
        </BorderlessButton>
      </IconContainer>
    </Container>
  )
};