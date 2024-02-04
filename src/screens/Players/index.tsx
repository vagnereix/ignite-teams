import { Header } from '@/components/Header';
import { Container, Form, HeaderList, PlayersQuantity } from './style';
import { Highlight } from '@/components/Highlight';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FlatList } from 'react-native';
import { useState } from 'react';

export function Players() {
  const [selectedTeam, setSelectedTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Vagner']);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />

      <Form>
        <Input placeholder='Digite o nome do jogador' autoCorrect={false} />
        <ButtonIcon icon='add' variant='primary' />
      </Form>

      <HeaderList>
        <FlatList
          horizontal
          data={['Time A', 'Time B']}
          keyExtractor={(team) => team}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={selectedTeam === item}
              onPress={() => setSelectedTeam(item)}
            />
          )}
        />

        <PlayersQuantity>{players.length} jogador(es)</PlayersQuantity>
      </HeaderList>
    </Container>
  );
}
