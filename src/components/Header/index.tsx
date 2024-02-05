import { useNavigation } from '@react-navigation/native';
import { BackButton, BackIcon, Container, Logo } from './styles';
import LogoImage from '@/assets/logo.png';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('groups');
  }

  return (
    <Container hasBackButton={showBackButton}>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoImage} />
    </Container>
  );
}
