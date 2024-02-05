import { Header } from '@/components/Header';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@/components/Highlight';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function NewGroup() {
  const { navigate } = useNavigation();
  const [group, setGroup] = useState('');

  function handleNewTeam() {
    navigate('players', { group });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title='Novo time'
          subtitle='Crie um novo time para começar a organizar suas atividades.'
        />

        <Input
          placeholder='Nome do time'
          onChangeText={setGroup}
          style={{
            marginBottom: 20,
          }}
        />

        <Button title='Criar time' onPress={handleNewTeam} />
      </Content>
    </Container>
  );
}
