import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage
} from './styles'

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!; //a exclamação indica que index nunca será nulo, assim o index será do tipo number e não number | null
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {
          imagesUrl.map((_, index) => (  //Utilizado o underline para representar o item, neste caso o javascript desconsidera o uso dessa propriedade (item,index)
            <ImageIndex key={index} active={index == imageIndex} />
          ))

        }
      </ImageIndexes>


      <FlatList horizontal showsHorizontalScrollIndicator={false} onViewableItemsChanged={indexChanged.current} data={imagesUrl} keyExtractor={key => key} renderItem={({ item }) => (
        <CarImageWrapper>
          <CarImage source={{ uri: item }} resizeMode="contain" />
        </CarImageWrapper>
      )}
      />
    </Container>
  )
};