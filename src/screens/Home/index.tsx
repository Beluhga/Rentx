import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons} from '@expo/vector-icons';
import { StatusBar} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {api} from '../../services/api';
import Logo from '../../../assets/logo.svg';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import { useTheme } from 'styled-components';


import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCardsButton

} from './styles';

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]); // para tipar o carDTO
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();
  const theme = useTheme();

  //car: CarDTO é o parametro para passar os dados do carro selecionado
  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', {car})
  }

  function handleOpenMyCars(car: CarDTO) {
    navigation.navigate('Mycars')
  }

  const myCardsButtonProps = {
    onPress: handleOpenMyCars
  }


  // para buscar os dados da API
  useEffect(() => {
    async function fetchCars(){
      try {
        const response = await api.get('/cars');
        setCars(response.data);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
      
    fetchCars();
  },[]);

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
    {loading ? <Load /> :
      <CarList
        data={cars}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => 
          <Car
          data={item} 
          onPress={() => handleCarDetails(item)} /> // passando dados entre telas
      }
    />
  }
  <MyCardsButton {...myCardsButtonProps} >
    <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
  </MyCardsButton>
    
 </Container>
  );
}

/*
// utilizado para testar
const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
   },
   thumbnail: 'https://www.pngmart.com/files/22/Audi-RS5-PNG-Isolated-Pic.png'
  }


*/