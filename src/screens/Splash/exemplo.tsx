import React from 'react';
import { Button, StyleSheet, Dimensions } from 'react-native';
import Animated, {
    useSharedValue, 
    useAnimatedStyle,
    withTiming,
    Easing
} from 'react-native-reanimated';

import {
  Container
} from './styles';

const WIDTH = Dimensions.get('window').width;

export function exemplo(){
    //hook para compartilha com as animações o valor
    const animation = useSharedValue(0);

    // objeto de animação e estilos animados
    const animatedStyles = useAnimatedStyle(() =>{
        return {
            // pode ser  translateY ou translateX
            transform:[ 
                {
                    // para fazer a animação de arrastar withTiming
                    translateX: withTiming(animation.value, { 
                    duration: 500,
                    // para fazer as animações correrem de cada um de um jeito diferente. Dependendo do Easing.(oq escolher)
                    easing: Easing.bezier(.99,0,0,.98)
                    })
                } 
            ]
        }
    });

    
    function handlePositionAnimation(){
        animation.value= Math.random() * (WIDTH - 100);
    }



return (
 <Container>
    {/* para animar os elementos */}
    <Animated.View style={[styles.box, animatedStyles]}/>

    <Button title="Mover" onPress={handlePositionAnimation} />

 </Container>
  );
}

const styles = StyleSheet.create ({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }


});