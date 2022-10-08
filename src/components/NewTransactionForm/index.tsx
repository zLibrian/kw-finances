import { FormEvent, useState } from "react";
import close from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../context/TransactionContext";
import * as StyledModal from "./styles";

export const NewTransactionForm = () => {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    const newTransaction = { title, amount, category, type };
    createTransaction(newTransaction);
  };

  return (
    <>
      <StyledModal.DialogOverlay />
      <StyledModal.DialogContent>
        <StyledModal.DialogClose>
          <img src={close} alt="fechar modal" />
        </StyledModal.DialogClose>
        <StyledModal.DialogTitle>Cadastrar transação</StyledModal.DialogTitle>
        <StyledModal.DialogForm
          onSubmit={handleCreateNewTransaction}
          method="post"
        >
          <label htmlFor="title">
            <input
              type="text"
              placeholder="Título"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <input
              type="number"
              placeholder="Preço"
              id="price"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </label>
          <div>
            <StyledModal.RadioBox
              type="button"
              onClick={() => setType("deposit")}
              isActive={type === "deposit"}
              activeColor="green"
            >
              <img src={incomeImg} alt="entrada" />
              Entrada
            </StyledModal.RadioBox>
            <StyledModal.RadioBox
              type="button"
              onClick={() => setType("withdraw")}
              isActive={type === "withdraw"}
              activeColor="red"
            >
              <img src={outcomeImg} alt="saida" />
              Saida
            </StyledModal.RadioBox>
          </div>
          <label htmlFor="category">
            <input
              type="text"
              placeholder="Categoria"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <StyledModal.RadioBox className="highlight-button">
            Cadastrar
          </StyledModal.RadioBox>
        </StyledModal.DialogForm>
      </StyledModal.DialogContent>
    </>
  );
};
