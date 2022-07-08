import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImagemSlider } from '../../components/ImagemSlider';

import SpeedSvg from '../../../assets/speed.svg';
import AccelerationSvg from '../../../assets/acceleration.svg';
import ForceSvg from '../../../assets/force.svg';
import GasolineSvg from '../../../assets/gasoline.svg';
import ExchangeSvg from '../../../assets/exchange.svg';
import PeopleSvg from '../../../assets/people.svg';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';


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
  Acessories,
  Footer

} from './styles';

export function CarDetails(){
  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate('Scheduling')
  }


return (
 <Container>
    <Header>
        <BackButton onPress={() => {}} />
    </Header>

    <CarImages>
    <ImagemSlider imageUrl={['https://www.pngmart.com/files/22/Audi-RS5-PNG-Isolated-Pic.png']} />
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

      <Acessories>
      <Accessory name="380km/h" icon={SpeedSvg} />
      <Accessory name="3.2s" icon={AccelerationSvg} />
      <Accessory name="800 HP" icon={ForceSvg} />
      <Accessory name="Gasolina" icon={GasolineSvg} />
      <Accessory name="Auto" icon={ExchangeSvg} />
      <Accessory name="2 Pessoas" icon={PeopleSvg} />
      
      </Acessories>

      <About>
      Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
      É um belíssimo carro para quem gosta de acelerar.
      </About>
    </Content>

    <Footer>
      <Button title="Escolher período do aluguel" onPress={handleConfirmRental}/>
    </Footer>

 </Container>
  );
}