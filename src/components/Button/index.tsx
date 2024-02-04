import { TouchableOpacityProps } from "react-native";
import { Container, Title, VariantType } from "./styles"

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: VariantType;
}

export function Button({ title, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}