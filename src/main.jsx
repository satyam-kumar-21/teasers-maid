import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { Provider as ReduxProvider } from "react-redux"; // Import Provider from react-redux
import store from "./store/store.jsx"; // Import your Redux store
import { Provider } from "./provider.tsx"; // Your custom provider
import "./styles/globals.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        {/* Wrap your app with Redux Provider first */}
        <ReduxProvider store={store}>
          {/* Then wrap with your custom Provider */}
          <Provider>
            <App />
          </Provider>
        </ReduxProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
