import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  color: string;
}
interface ButtonTextProps {
  ligth: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
width:100% ;
padding:19px ;
align-items: center;
justify-content: center;
background-color: ${({ color }) => color};
flex-direction: row;
margin-right: 5px;
margin-bottom: 8px;
`;

export const Title = styled.Text<ButtonTextProps>`
font-size: ${RFValue(15)}px ;
font-family: ${({ theme }) => theme.fonts.primary_500};
color: ${({ theme, ligth }) => ligth ? theme.colors.header : theme.colors.background_secondary};
`;