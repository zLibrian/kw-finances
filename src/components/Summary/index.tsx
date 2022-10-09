import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../context/TransactionContext";
import { formatPrice } from "../../helpers";
import { Container, SummaryCard } from "./styles";

export const Summary = () => {
  const { transactions } = useTransactions();
  const summaryTotal = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatPrice(summaryTotal.deposits)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>{formatPrice(summaryTotal.withdraws)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatPrice(summaryTotal.total)}</strong>
      </SummaryCard>
    </Container>
  );
};
