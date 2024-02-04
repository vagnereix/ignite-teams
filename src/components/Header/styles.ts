import { CaretLeft, IconProps } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View<{ hasBackButton: boolean }>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ hasBackButton }) =>
    hasBackButton ? 'space-between' : 'center'};
`;

export const Logo = styled.Image`
  width: 46px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(CaretLeft).attrs(({ theme }): IconProps => {
  return {
    size: 36,
    color: theme.COLORS.WHITE,
  };
})``;
