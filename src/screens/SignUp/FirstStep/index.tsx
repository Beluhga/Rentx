import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import {Button} from '../../../components/Button';


import {
  Container,
  Header,
  Step,
  Title,
  SUBTitle,
  Form,
  FormTitle
} from './styles';

export function FirstStep(){
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();
  }

  function handleNextStep(){
    navigation.navigate('SecondStep');
  }
return (
  <KeyboardAvoidingView behavior="position" enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <BackButton onPress={handleBack} />
          <Step>
            <Bullet active/>
            <Bullet />

          </Step>
        </Header>

        <Title>
          Crie sua{'\n'}conta
        </Title>

        <SUBTitle>
          Faça seu cadastro de{'\n'}
          forma rápida e fácil
        </SUBTitle>

        <Form>
          <FormTitle>1. Dados</FormTitle>

          <Input 
            iconName="user"
            placeholder="Nome"
          />
          <Input 
            iconName="mail"
            placeholder="E-mail"
            keyboardType='email-address'
          />
          <Input 
            iconName="credit-card"
            placeholder="CNH"
            keyboardType='numeric'
          />
        </Form>

        <Button 
          title="Próximo"
          onPress={handleNextStep}
        />

      </Container>
  </TouchableWithoutFeedback>
 </KeyboardAvoidingView>
  );
}