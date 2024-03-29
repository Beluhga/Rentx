import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import {format, parseISO} from 'date-fns';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImagemSlider } from '../../components/ImagemSlider';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { api } from '../../services/api';



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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  
} from './styles';

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string
}

export function SchedulingDetails(){
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const theme = useTheme();


  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car, dates } = route.params as Params; // tipagem do API

  //total de datas  * custo de cada dia
  const rentTotal = Number(dates.length * car.price);


  async function handleConfirm() {
    setLoading(true)
    
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
     ...schedulesByCar.data.unavailable_dates,
     ...dates,
    ];
      
    await api.post('schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(parseISO(dates[0]), 'dd/MM/yyyy'),
      endDate: format(parseISO(dates[dates.length -1]),'dd/MM/yyyy')
    });api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })  
    .then(() => { 
      navigation.navigate('Confirmation', {
        nextScreenRoute: 'Home',
        title: 'Carro alugado!',
        message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel`
      })
    })
    .catch(() => {
    Alert.alert('Não foi possível confirmar o agendamento.')
    setLoading(false)

    })
    
    
  }

  function handleBack(){
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(parseISO(dates[0]), 'dd/MM/yyyy'),
      end: format(parseISO(dates[dates.length -1]),'dd/MM/yyyy'),
    });
  }, []);

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
        <Period>{car.period}</Period>
        <Price>R$ {car.price}</Price>
      </Rent>
      </Details>

      <Accessories>
        {
          car.accessories.map(accessory => {
            <Accessory 
            key={accessory.type}
            name={accessory.name} 
            icon={getAccessoryIcon(accessory.type)} />
          })
      
        }
      </Accessories>

      <RentalPeriod>
        <CalendarIcon>
          <Feather
            name="calendar"
            size={RFValue(24)}
            color={theme.colors.shape}
          />
        </CalendarIcon>

        <DateInfo>
          <DateTitle>DE</DateTitle>
          <DateValue>{rentalPeriod.start}</DateValue>
        </DateInfo>
        <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

        <DateInfo>
          <DateTitle>ATÉ</DateTitle>
          <DateValue>{rentalPeriod.end}</DateValue>
        </DateInfo>
      </RentalPeriod>

      <RentalPrice>
        <RentalPriceLabel>TOTAL</RentalPriceLabel>
        <RentalPriceDetails>
          <RentalPriceQuota>{`R$ ${car.price} x ${dates.length} diárias`}</RentalPriceQuota>
          <RentalPriceTotal>{rentTotal}</RentalPriceTotal>
        </RentalPriceDetails>
      </RentalPrice>

    </Content>



    <Footer>
      <Button 
      title="Alugar agora" 
      color={theme.colors.success} 
      onPress={handleConfirm} 
      enabled={!loading}
      loading={loading}
      />
    </Footer>

 </Container>
  );
}

/*await api.post('rentals', {
      user_id: 1,
      car_id: car.id,
      startDate: new Date(dates[0]),
      endDate: new Date(dates[dates.length -1]),
      total: rentTotal
    })*/