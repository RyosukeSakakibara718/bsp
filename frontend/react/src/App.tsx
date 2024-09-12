import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes";
import Header from "./pages/header/coomponents/templates/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;
