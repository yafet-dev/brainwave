import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";

function Benefits() {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={"chat smarter not harder"}
        />

        <div className="flex flex-wrap gap-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%]
              md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h2">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Benefits;
