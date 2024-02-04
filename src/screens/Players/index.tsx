import { Header } from '@/components/Header';
import { Container, Form, HeaderList, PlayersQuantity } from './style';
import { Highlight } from '@/components/Highlight';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { PlayerCard } from '@/components/PlayerCard';
import { ListEmpty } from '@/components/ListEmpty';
import { Button } from '@/components/Button';

export function Players() {
  const [selectedTeam, setSelectedTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Vagner', 'Reis']);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nome do time'
        subtitle='Adicione a galera e separe os times'
      />

      <Form>
        <Input placeholder='Digite o nome do jogador' autoCorrect={false} />
        <ButtonIcon
          icon='add'
          variant='primary'
          onPress={() => console.log(`Adding player`)}
        />
      </Form>

      <HeaderList>
        <FlatList
          horizontal
          data={['Time A', 'Time B']}
          keyExtractor={(team) => team}
          showsHorizontalScrollIndicator={false}
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

      <FlatList
        data={players}
        keyExtractor={(player) => player}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => console.log(`Removing player ${item}`)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há jogadores registrados nesse time.' />
        )}
        contentContainerStyle={[
          { paddingBottom: 50 },
          !players.length && { flex: 1 },
        ]}
      />

      <Button title='Remover time' variant='secondary' />
    </Container>
  );
}
