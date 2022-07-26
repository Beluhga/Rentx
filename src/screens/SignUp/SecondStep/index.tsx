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
import { PasswordInput } from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';

export function SecondStep(){
  const navigation = useNavigation();

  const theme = useTheme()

  function handleBack(){
    navigation.goBack();
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
          <FormTitle>2. Senha</FormTitle>
            <PasswordInput 
              iconName='lock'
              placeholder='Senha'
            />
             <PasswordInput 
              iconName='lock'
              placeholder='Repetir Senha'
            />
   
   
        </Form>

        <Button 
          color={theme.colors.success}
          title="Cadastrar"
        />

      </Container>
  </TouchableWithoutFeedback>
 </KeyboardAvoidingView>
  );
}