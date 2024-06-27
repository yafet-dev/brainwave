import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

import Hero from "./components/Hero";
function App() {
  return (
    <>
      <div className="lg:mt-10 overflow-hidden lg:pt-[5.25rem]">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
