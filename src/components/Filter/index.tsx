import { TouchableOpacityProps } from 'react-native';
import { Container, FilterStyleProps, Title } from './styles';

type FiltersProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, ...rest }: FiltersProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
