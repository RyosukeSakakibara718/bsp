import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./pages/header/components/templates/Header";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;
