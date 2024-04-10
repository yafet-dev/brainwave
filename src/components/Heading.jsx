function Heading({ className, title }) {
  return (
    <div className={`${className} max-w-[50rem] max-auto mb-12 lg:mb-20`}>
      {title && <h5 className="h5">{title}</h5>}
    </div>
  );
}

export default Heading;
