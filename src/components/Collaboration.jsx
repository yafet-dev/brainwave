import { collabContent } from "../constants";
import Section from "./Section";

function Collaboration() {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3" key={item.id}>
                <div className="flex items-center">
                  <img />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Collaboration;
