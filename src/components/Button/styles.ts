import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type VariantType = 'primary' | 'secondary';

type ButtonProps = {
  variant: VariantType;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, variant }) => {
    if (variant === 'primary') {
      return theme.COLORS.GREEN_700;
    }

    return theme.COLORS.RED_DARK;
  }};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
