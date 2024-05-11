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
            <div key={item.id}>
              <div>
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Benefits;
