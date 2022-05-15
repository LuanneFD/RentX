import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
width: 100%;
height:325px ;

background-color: ${({ theme }) => theme.colors.header};
justify-content: center;
padding:25px ;

`;

export const Title = styled.Text`
font-size: ${RFValue(34)}px ;
font-family: ${({ theme }) => theme.fonts.secondary_600};
color:${({ theme }) => theme.colors.shape};
margin-top: 24px;
`;