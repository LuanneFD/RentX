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
  value: string;
}

export function InputPassword({ iconName, value, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const theme = useTheme();

  function handleFocused() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVisibility() {
    setIsPasswordVisible(prevState => !prevState);
  }
  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather name={iconName} size={24} color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest}
        secureTextEntry={isPasswordVisible}
        onFocus={handleFocused}
        onBlur={handleBlur}
        isFocused={isFocused}
        autoCorrect={false} />

      <IconContainer isFocused={isFocused}>
        <BorderlessButton onPress={handlePasswordVisibility}>
          <Feather name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color={theme.colors.text_detail} />
        </BorderlessButton>
      </IconContainer>
    </Container>
  )
};