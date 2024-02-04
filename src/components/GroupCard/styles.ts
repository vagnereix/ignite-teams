import { IconProps, UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  padding: 24px;
  border-radius: 6px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }): IconProps => {
  return {
    size: 32,
    color: theme.COLORS.GREEN_700,
    weight: 'fill',
  };
})`
  margin-right: 20px;
`;
