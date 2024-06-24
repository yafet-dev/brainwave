import { Children } from "react";

function Section() {
  const Section = {
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    Children,
  };
  return (
    <div
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""} 
        ${className || ""}`
      }`}
    >
      {Children}
    </div>
  );
}

export default Section;
