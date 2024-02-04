import { Header } from '@/components/Header';
import { Container, Form } from './style';
import { Highlight } from '@/components/Highlight';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Input } from '@/components/Input';

export function Players() {
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
    </Container>
  );
}
