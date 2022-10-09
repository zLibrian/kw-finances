import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";

import { Header } from "./components/Header";
import { NewTransactionForm } from "./components/NewTransactionForm";
import { GlobalStyle } from "./styles/global";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
        <Header />
        <Dialog.Portal>
          <NewTransactionForm setOpenModal={setOpenModal} />
        </Dialog.Portal>
      </Dialog.Root>
      <Dashboard />
    </>
  );
}

export default App;
