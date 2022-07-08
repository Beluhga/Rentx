import React from 'react';
import { StatusBar} from 'react-native';
import {useTheme} from 'styled-components'; 
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../../assets/arrow.svg';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateTitle,
  DateValue,
  DateInfo,
  Content,
  Footer
} from './styles';


export function Scheduling(){
  const theme = useTheme();

  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails')
  }

return (
 <Container>
  <Header>
  <StatusBar
    barStyle="light-content" // para ficar com os estatus do celular com cor diferente
    backgroundColor="transparent"
    translucent
    />
        <BackButton 
        onPress={() => {}}
        color={theme.colors.shape}
         />

        <Title> 
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>
              18/06/2021
              </DateValue>
          </DateInfo>

           <ArrowSvg />

           <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateValue selected={false}>
              18/06/2021
              </DateValue>
          </DateInfo>
        </RentalPeriod>

    </Header>

    <Content>
      <Calendar />
    </Content>

  <Footer>
    <Button title="Confirmar" onPress={handleConfirmRental} />

  </Footer>

 </Container>
  );
}