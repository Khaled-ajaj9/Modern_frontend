import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Logo from "./Components/Logo";
import "./App.css";
import Purupos from "./Components/Purupos";
import Feature from "./Components/Feature";
import Sched from "./Components/Sched";
import Secandefea from "./Components/Secandefea";
import Pricing from "./Components/Pricing";
import Futuer from "./Components/Futuer";
import Test from "./Components/Test";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <Logo />
        <Purupos />
        <Feature />
        <Sched />
        <Secandefea />
        <Pricing />
        <Futuer />
        <Test />
        <NewsLetter />
        <Footer />
      </div>
    </main>
  );
};

export default App;
