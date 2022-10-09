import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      const data2 = { ...data, createdAt: new Date() };
      return schema.create("transaction", data2);
    });

    this.delete("/transactions/:id", (schema, request) => {
      const { id } = request.params;
      schema.db.transactions.remove(id);
      return schema.create("transaction", {});
    });
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>
);
