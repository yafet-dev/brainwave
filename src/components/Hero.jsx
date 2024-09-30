import Section from "./Section";
import { curve } from "../assets/index";

function Hero() {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the possibilities of AI chatting with
            <span className="inline-block relative">
              Brainwave
              <img src={curve} className="absolute top-full" />
            </span>
          </h1>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
