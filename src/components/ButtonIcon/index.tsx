import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, IconVariant } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: IconVariant;
};

export function ButtonIcon({
  icon,
  variant = 'primary',
  ...props
}: ButtonIconProps) {
  return (
    <Container {...props}>
      <Icon name={icon} variant={variant} />
    </Container>
  );
}
