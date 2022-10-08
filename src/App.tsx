import * as Dialog from "@radix-ui/react-dialog";
import { Dashboard } from "./components/Dashboard";

import { Header } from "./components/Header";
import { NewTransactionForm } from "./components/NewTransactionForm";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Dialog.Root>
        <Header />
        <Dialog.Portal>
          <NewTransactionForm />
        </Dialog.Portal>
      </Dialog.Root>
      <Dashboard />
    </>
  );
}

export default App;
