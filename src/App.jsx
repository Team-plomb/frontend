import React, { useState } from "react";

import LandingPage from "./pages/LandingPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Provider from "./component/Provider";

function App() {
  return (
    <Provider>
      <main style={{ backgroundColor: "#252525", color: "white" }}>
        <Navbar />
        <LandingPage />
        <Footer />
      </main>
    </Provider>
  );
}

export default App;
