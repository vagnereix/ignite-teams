import { StatusBar } from 'expo-status-bar';
import { Groups } from '@/screens/Groups';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from '@/theme';

import { Loading } from '@/components/Loading';
import { NewGroup } from '@/screens/NewGroup';
import { Players } from '@/screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="inverted" />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
