import { BackButton, BackIcon, Container, Logo } from "./styles";
import LogoImage from '@/assets/logo.png';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container hasBackButton={showBackButton}>
      {showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }

      <Logo source={LogoImage} />
    </Container>
  );
}
