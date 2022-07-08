import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';

export function Home(){
  const navigation = useNavigation<any>();


  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
   },
   thumbnail: 'https://www.pngmart.com/files/22/Audi-RS5-PNG-Isolated-Pic.png'
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails')
  }

return (
 <Container>
  <StatusBar
    barStyle="light-content" // para ficar com os estatus do celular com cor diferente
    backgroundColor="transparent"
    translucent
    />
    <Header>
      <HeaderContent>
        <Logo
          width={RFValue(108)}
          height={RFValue(12)}
         />
        <TotalCars>
          Total de 12 carros
        </TotalCars>
        </HeaderContent>
    </Header>

    <CarList
     data={[1,2,3,4,5,6,7]}
     keyExtractor={item => String(item)}
     renderItem={({item}) => 
     <Car data={carData} onPress={handleCarDetails} />
    }
    />
    
 </Container>
  );
}