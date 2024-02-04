import { Header } from '@/components/Header';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@/components/Highlight';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export function NewGroup() {
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
          style={{
            marginBottom: 20,
          }}
        />

        <Button title='Criar time' />
      </Content>
    </Container>
  );
}
