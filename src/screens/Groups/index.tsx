import { Header } from '@/components/Header';
import { Container } from './styles';
import { Highlight } from '@/components/Highlight';
import { GroupCard } from '@/components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@/components/ListEmpty';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={(item, _) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?' />}
        contentContainerStyle={!groups.length && { flex: 1 }}
      />
    </Container>
  );
}
