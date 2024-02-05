import { Header } from '@/components/Header';
import { Container } from './styles';
import { Highlight } from '@/components/Highlight';
import { GroupCard } from '@/components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@/components/ListEmpty';
import { Button } from '@/components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootParamList = {
  groups: undefined;
  new: undefined;
  players: { group: string };
};

type GroupsProps = {
  navigation: NativeStackNavigationProp<RootParamList, 'groups'>;
};

export function Groups({ navigation: { navigate } }: GroupsProps) {
  const [groups, setGroups] = useState<string[]>([]);

  function handleNewTeam() {
    navigate('new');
  }

  return (
    <Container>
      <Header />
      <Highlight title='Times' subtitle='Jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={(item, _) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message='Que tal cadastrar o primeiro time?' />
        )}
        contentContainerStyle={!groups.length && { flex: 1 }}
      />

      <Button title='Criar novo time' onPress={handleNewTeam} />
    </Container>
  );
}
