import closeImg from "../../assets/close.svg";
import { useTransactions } from "../../context/TransactionContext";
import { Container, TableContent } from "./styles";

export const TransactionsTable = () => {
  const { transactions, removeTransaction } = useTransactions();
  if (!transactions) {
    return <p>Carregando...</p>;
  }
  return (
    <Container>
      <TableContent>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === "withdraw" && "- "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => removeTransaction(transaction.id)}
                  >
                    <img src={closeImg} alt="Remover transação" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </TableContent>
    </Container>
  );
};
