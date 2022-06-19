import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, Extrapolate, runOnJS } from 'react-native-reanimated';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import {
  Container
} from './styles'


export function Splash() {
  const slashAnimation = useSharedValue(0);
  const navigation = useNavigation<any>();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        slashAnimation.value, [0, 50], [1, 0]),//controle da opacidade enquanto o withTiming vai de 0 a 50
      transform: [
        {
          translateX: interpolate(slashAnimation.value, [0, 50], [0, -50], Extrapolate.CLAMP) //Extrapolate impõe que o limite seja obedecido
        }
      ]
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(slashAnimation.value, [0, 25, 50], [0, .3, 1], Extrapolate.CLAMP),
      transform: [
        {
          translateX: interpolate(slashAnimation.value, [0, 50], [-50, 0], Extrapolate.CLAMP)
        }
      ]
    }
  });

  function startApp() {
    navigation.navigate("SignIn");
  }

  useEffect(() => {
    slashAnimation.value = withTiming(50, { duration: 1000 },
      () => { //este bloco indica que deve ser redirecionado para a thread principal, chamando o JS.
        'worklet';
        runOnJS(startApp)()
      })
  }, [])

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  )
};
