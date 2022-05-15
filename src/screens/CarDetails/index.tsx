import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg'
import Acceleration from '../../assets/acceleration.svg'
import Gasoline from '../../assets/gasoline.svg'
import Exchange from '../../assets/exchange.svg'
import Force from '../../assets/force.svg'
import People from '../../assets/people.svg'

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles'
import { Button } from '../../components/Button';


export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory icon={SpeedSvg} name="380km/h" />
          <Accessory icon={Acceleration} name="3.2s" />
          <Accessory icon={Force} name="800 HP" />
          <Accessory icon={Gasoline} name="Gasolina" />
          <Accessory icon={Exchange} name="Auto" />
          <Accessory icon={People} name="2 pessoas" />
        </Accessories>


        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" color='red' />
      </Footer>

    </Container>
  )
};