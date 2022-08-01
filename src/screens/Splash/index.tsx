import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import BrandSvg from '../../../assets/brand.svg'
import LogoSvg from '../../../assets/logo.svg'


import Animated, {
    useSharedValue, 
    useAnimatedStyle,
    withTiming,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';

import {
  Container
} from './styles';

export function Splash(){
    const splashAnimation = useSharedValue(0); // 0 > 50

    const navigation = useNavigation();

    const brandAStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, // para animar a splash
                [0, 50],
                [1, 0]
                ),
                transform: [
                    {
                     translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [1, 0],
                        Extrapolate.CLAMP,
                        )
                    }
                ],
        }
    });

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, // para animar a splash
                [0, 25, 50],
                [0, .3, 1],
                ),
                transform: [
                    {
                     translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP,
                        )
                    }
                ],

        }
    });

    function startApp() {
        navigation.navigate('SignIn');
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50, {duration: 2000},
            () => {
            // esse callback é pra poder transferir para o HOME
            'worklet'
            runOnJS(startApp)();
            }
            
            ) // para animar a splash

    },[]);

return (
 <Container>
    <Animated.View style={[brandAStyle, {position: 'absolute'}]}>
        <BrandSvg width={80} height={50} />
    </Animated.View>

    <Animated.View style={[logoStyle, {position: 'absolute'}]}>
        <LogoSvg width={180} height={20} />
    </Animated.View>
 </Container>
  );
}