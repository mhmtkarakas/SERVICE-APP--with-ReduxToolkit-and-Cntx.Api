import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ThemeContextProvider from "./context/theme-context-provider";
import AuthTokenContextProvider from "./context/auth-token-context-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthTokenContextProvider>
          <App />
        </AuthTokenContextProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
