import { Header } from "@/components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie uma nova turma para começar a organizar suas atividades."
        />

        <Button title="Criar turma" />
      </Content>
    </Container>
  )
}
