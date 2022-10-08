import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import close from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import {
  DialogClose,
  DialogContent,
  DialogForm,
  DialogOverlay,
  DialogTitle,
  RadioBox,
} from "./styles";

export const NewTransactionForm = () => {
  const [transactionType, setTransactionType] = useState("deposit");
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogClose>
          <img src={close} alt="fechar modal" />
        </DialogClose>
        <DialogTitle>Cadastrar transação</DialogTitle>
        <DialogForm action="post">
          <label htmlFor="title">
            <input type="text" placeholder="Título" id="title" />
          </label>
          <label htmlFor="">
            <input type="text" placeholder="Preço" id="price" />
          </label>
          <div>
            <RadioBox
              type="button"
              onClick={() => setTransactionType("deposit")}
              isActive={transactionType === "deposit"}
            >
              <img src={incomeImg} alt="entrada" />
              Entrada
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => setTransactionType("withdraw")}
              isActive={transactionType === "withdraw"}
            >
              <img src={outcomeImg} alt="saida" />
              Saida
            </RadioBox>
          </div>
          <label htmlFor="category">
            <input type="text" placeholder="Categoria" id="category" />
          </label>
          <RadioBox className="highlight-button">Cadastrar</RadioBox>
        </DialogForm>
      </DialogContent>
    </Dialog.Portal>
  );
};
