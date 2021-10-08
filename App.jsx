import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Info from "./Info";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      for (let i = 0; i < 4; i++) {
        <Info />
  }
    </div>
  );
}

export default App;
