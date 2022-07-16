import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImagemSlider } from '../../components/ImagemSlider';

import {getAccessoryIcon} from '../../utils/getAccessoryIcon';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';


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

} from './styles';

interface Params {
  car: CarDTO;
}

export function CarDetails(){
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params; // tipagem do API

  function handleConfirmRental() {
    navigation.navigate('Scheduling', {
      car
    })
  }
  function handleBack(){
    navigation.goBack();
  }


return (
 <Container>
    <Header>
        <BackButton onPress={handleBack} />
    </Header>

    <CarImages>
    <ImagemSlider imageUrl={car.photos} />
    </CarImages>

    <Content>
      <Details>
        <Description>
          <Brand>{car.brand}</Brand>
          <Name>{car.name}</Name>
        </Description>

      <Rent>
        <Period>{car.rent.period}</Period>
        <Price>R$ {car.rent.price}</Price>
      </Rent>
      </Details>

      <Accessories>
      {
        // para mapear todo o conteudo da API na parte de accessory
        car.accessories.map(accessory => (
        <Accessory
          // aqui mostra todo o conteudo mapeado de acordo com cada um
          key={accessory.type}
          name={accessory.name}
          icon={getAccessoryIcon(accessory.type)} // para executar a função sem precisa ser clicado e para exibir os icones dinamicamente

          />
        ))
      }
      </Accessories>

      <About>
        {car.about /* descrição do carro*/}
      </About>
    </Content>

    <Footer>
      <Button 
      title="Escolher período do aluguel" 
      onPress={handleConfirmRental} />
    </Footer>

 </Container>
  );
}