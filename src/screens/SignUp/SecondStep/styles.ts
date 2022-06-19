import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
padding: 0 24px;
background-color:${({ theme }) => theme.colors.background_primary} ;
`;

export const Header = styled.View`
width:100% ;
flex-direction: row;
align-items: center;
justify-content:space-between ;
margin-top: 60px;
`;

export const Steps = styled.View`
flex-direction: row;
align-items: center;
`;

export const Form = styled.View`
width:100% ;
margin-top:64px ;
margin-bottom: 16px;
`;

export const FormTitle = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({ theme }) => theme.fonts.secondary_600} ;
color: ${({ theme }) => theme.colors.title} ;
margin-bottom:24px ;
`;