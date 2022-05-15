import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
width:100% ;
padding:19px ;
align-items: center;
justify-content: center;
background-color: ${({ color, theme }) => color ? color : theme.colors.main};
`;

export const Title = styled.Text`
font-size: ${RFValue(15)}px ;
font-family: ${({ theme }) => theme.fonts.primary_500};
color: ${({ theme }) => theme.colors.background_secondary};
`;