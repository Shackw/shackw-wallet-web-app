import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "./app-layout";
import { HomePage } from "./pages/home";
import { StorePage } from "./pages/store";
import { WalletPage } from "./pages/wallet";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/store" element={<StorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
