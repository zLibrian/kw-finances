import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="kw money" />
        <Dialog.Trigger type="button">Nova transação</Dialog.Trigger>
      </Content>
    </Container>
  );
};
