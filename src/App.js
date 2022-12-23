import React from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/DataProvider";
import { Carrito } from "./componentes/Carrito";
import { Footer } from "./componentes/Footer/Footer";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
        <Header />
        <Carrito />
        <Paginas />
        <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
