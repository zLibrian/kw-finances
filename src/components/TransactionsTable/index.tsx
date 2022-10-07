import { Container, TableContent } from "./styles";

export const TransactionsTable = () => {
  return (
    <Container>
      <TableContent>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/10/2022</td>
          </tr>
          <tr>
            <td>Compra mensal</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Casa</td>
            <td>05/10/2022</td>
          </tr>
          <tr>
            <td>Shopping</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Pessoal</td>
            <td>20/10/2022</td>
          </tr>
          <tr>
            <td>Cinema</td>
            <td className="withdraw">- R$ 150,00</td>
            <td>Pessoal</td>
            <td>20/10/2022</td>
          </tr>
        </tbody>
      </TableContent>
    </Container>
  );
};
