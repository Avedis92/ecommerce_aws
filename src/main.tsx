import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import ErrorBoundary from "./components/molecules/errorBoundary/index.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
