import React from "react";
import Connected from "./components/Connected/Connected";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Services from "./components/Services-Section/Services";
import Story from "./components/Story-Section/Story";

function App() {
  return (
    <>
    <Header />
    <Story />
    <Services />
    <Features />
    <Connected />
    </>
  );
}

export default App;
