const FloatingElements = () => {
  return (
    <>
      <span
        className="absolute right-6 top-24 h-2.5 w-2.5 rounded-full bg-foreground"
        style={{ animation: "blink 1.4s steps(1) infinite" }}
      />
    </>
  );
};

export default FloatingElements;
