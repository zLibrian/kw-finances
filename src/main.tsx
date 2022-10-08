import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title:
            "Someday ill be falling without caution but for now im only... people watching",
        },
      ];
    });
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
