import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {CarDetails} from '../screens/CarDetails';
import {Scheduling} from '../screens/Scheduling';
import {SchedulingDetails} from '../screens/SchedulingDetails';
import {Confirmation} from '../screens/Confirmation';
import {Mycars} from '../screens/Mycars';
import {Splash} from '../screens/Splash';
import {SignIn} from '../screens/SignIn';
import {FirstStep} from '../screens/SignUp/FirstStep';
import {SecondStep} from '../screens/SignUp/SecondStep'




 const {Navigator, Screen } = createNativeStackNavigator();

 export function StackRoutes(){
    return(
        <Navigator  initialRouteName="SignIn" screenOptions={{ headerShown: false }}>

            <Screen 
              name="SignIn"
              component={SignIn}
            />

            <Screen 
              name="FirstStep"
              component={FirstStep}
            />
            <Screen 
              name="SecondStep"
              component={SecondStep}
            />

            <Screen 
              name="Home"
              component={Home}
              options={{
                //Previnir voltar a Splash no IOS
                gestureEnabled: false,
              }}
            />
            
            <Screen 
              name='CarDetails'
              component={CarDetails}
            />

            <Screen 
              name="Scheduling"
              component={Scheduling}
            />

            <Screen 
              name="SchedulingDetails"
              component={SchedulingDetails}
            />

            <Screen 
              name="Confirmation"
              component={Confirmation}
            />

            <Screen 
            name="Mycars"
            component={Mycars}
          />
        </Navigator>
    )
 }