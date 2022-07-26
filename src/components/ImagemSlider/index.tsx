import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { Bullet } from '../Bullet'

import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
    imageUrl:  string[];
}

// função para mudar quando o index mudar
interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImagemSlider({imageUrl}: Props){
  const [imageIndex, setImageIndex] = useState(0);

  // constante q usa a referencia da imagem para mover as bolinhas
  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
     setImageIndex(index);

  });


return (
    <Container>
 <ImageIndexes>
  { 
   /* função para pecorrer as imagens (as bolinhas) e mostras as bolinhas de acordo com a quantidade de fotos */
    imageUrl.map((_, index) => (
        <Bullet 
          key={String(index)}
          active={index === imageIndex} />
      ))
  }
 
 </ImageIndexes>

 <CarImageWrapper>
   <FlatList 
      data={imageUrl}
      keyExtractor={key => key}
      renderItem={({item}) => (
        <CarImageWrapper>
        <CarImage
          source={{ uri: item}}
          resizeMode="contain"
        />
        </CarImageWrapper>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={indexChanged.current}
   />
  
 </CarImageWrapper>
 </Container>
  );
}