function Heading({ className, title, text }) {
  return (
    <div className={`${className} max-w-[50rem] max-auto mb-12 lg:mb-20`}>
      {title && <h5 className="h5">{title}</h5>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
}

export default Heading;
