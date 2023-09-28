import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import EventDetails from "./components/EventDetails/EventDetails";
function App() {
  return (
    <>
      <Navbar />
      <EventDetails/>
      <Footer />
    </>
  );
}

export default App;
