import styled from 'styled-components/native';
import { Dimensions} from 'react-native'

interface ImageIndexProps {
    active: boolean;
}

export const Container = styled.View`
width:100%;
`;

export const ImageIndexes = styled.View`
flex-direction: row;
align-self: flex-end;
padding-right: 24px;

`;
export const ImageIndex = styled.View<ImageIndexProps>`
width: 6px;
height: 6px;

background-color: ${({theme, active}) => // função para mudar a cor de acordo se estiver ativo
 active ? theme.colors.title : theme.colors.shape};
 margin-left: 8px;
 border-radius: 3px;
`;
export const CarImageWrapper = styled.View`
    width: ${Dimensions.get('window').width}px; // para pegar o tamanho correto da tela, sem ultrapassar os lados
    height: 132px;

    justify-content: center;
    align-items: center;
`;
export const CarImage = styled.Image`
 width: 280px;
 height: 132px;
`;