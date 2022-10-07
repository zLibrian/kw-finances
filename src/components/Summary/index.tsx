import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container, SummaryCard } from "./styles";

export const Summary = () => {
  return (
    <Container>
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>R$ 200,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 800,00</strong>
      </SummaryCard>
    </Container>
  );
};
