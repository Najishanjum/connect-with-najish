const FloatingElements = () => {
  return (
    <>
      <span
        className="absolute right-4 top-20 h-2 w-2 rounded-full bg-foreground sm:right-6 sm:top-24 sm:h-2.5 sm:w-2.5"
        style={{ animation: "blink 1.4s steps(1) infinite" }}
      />
    </>
  );
};

export default FloatingElements;
