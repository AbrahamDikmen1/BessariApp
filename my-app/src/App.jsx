import React from "react";
import RouteProvider from "./RouteProvider";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar />

      <RouteProvider></RouteProvider>

      <Footer />
    </div>
  );
}

export default App;
