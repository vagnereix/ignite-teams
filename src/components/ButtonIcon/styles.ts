import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export type IconVariant = 'primary' | 'secondary';

type IconProps = {
  variant: IconVariant;
};

export const Container = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  margin-left: 12px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, variant }) => ({
    size: 24,
    color: variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
