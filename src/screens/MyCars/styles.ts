import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex: 1;
align-items: center;
background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
width: 100%;
height:357px ;

background-color: ${({ theme }) => theme.colors.header};
justify-content: center;
padding:25px ;
padding-top: 30px;
`;

export const Title = styled.Text`
font-size: ${RFValue(29)}px ;
font-family: ${({ theme }) => theme.fonts.secondary_600};
color:${({ theme }) => theme.colors.shape};
margin-top: 39px;
`;

export const SubTitle = styled.Text`
font-size: ${RFValue(15)}px ;
font-family: ${({ theme }) => theme.fonts.secondary_400};
color:${({ theme }) => theme.colors.shape};
margin-top: 18px;
`;

export const Content = styled.View`
flex:1;
width:100% ;
padding: 0 16px;
`;

export const Appointments = styled.View`
width:100% ;
flex-direction:row ;
justify-content: space-between;
align-items:center ;
padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
font-size: ${RFValue(15)}px ;
font-family: ${({ theme }) => theme.fonts.primary_400};
color:${({ theme }) => theme.colors.text};
`;

export const AppointmentsQuantity = styled.Text`
font-size: ${RFValue(15)}px ;
font-family: ${({ theme }) => theme.fonts.primary_500};
color:${({ theme }) => theme.colors.title};
`;

export const CarWrapper = styled.View`
margin-bottom: 16px;
`;

export const CarFooter = styled.View`
width: 100%;
padding: 12px;
margin-top:-14px ;
flex-direction: row;
align-items:center ;
justify-content: space-between;
background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
font-size: ${RFValue(10)}px ;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color:${({ theme }) => theme.colors.text_detail};
text-transform: uppercase;
`;

export const CarFooterPeriod = styled.View`
flex-direction: row;
align-items:center ;
`;

export const CarFooterDate = styled.Text`
font-size: ${RFValue(13)}px ;
font-family: ${({ theme }) => theme.fonts.primary_400};
color:${({ theme }) => theme.colors.title};
`;

