const FloatingElements = () => {
  return (
    <>
      {/* Star - Blue */}
      <svg
        className="absolute top-4 left-4 w-8 h-8"
        style={{ animation: "float 3s ease-in-out infinite", color: "var(--color-blue)" }}
        viewBox="0 0 24 24" fill="currentColor"
      >
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
      </svg>

      {/* Blob - Purple */}
      <div
        className="absolute top-8 right-6 w-6 h-6 rounded-full"
        style={{
          backgroundColor: "var(--color-purple)",
          animation: "float-delay 3s ease-in-out infinite",
          opacity: 0.7,
        }}
      />

      {/* Star - Orange */}
      <svg
        className="absolute bottom-20 left-3 w-6 h-6"
        style={{ animation: "float-slow 3s ease-in-out infinite", color: "var(--color-orange)" }}
        viewBox="0 0 24 24" fill="currentColor"
      >
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
      </svg>

      {/* Arrow - Blue */}
      <svg
        className="absolute bottom-32 right-4 w-7 h-7"
        style={{ animation: "float 3s ease-in-out infinite 0.5s", color: "var(--color-blue)" }}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>

      {/* Small blob - Orange */}
      <div
        className="absolute top-1/2 left-1 w-4 h-4 rounded-full"
        style={{
          backgroundColor: "var(--color-orange)",
          animation: "float-delay 3s ease-in-out infinite 1s",
          opacity: 0.5,
        }}
      />

      {/* Spinning star - Purple */}
      <svg
        className="absolute top-1/3 right-2 w-5 h-5"
        style={{ animation: "spin-slow 6s linear infinite", color: "var(--color-purple)" }}
        viewBox="0 0 24 24" fill="currentColor"
      >
        <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
      </svg>
    </>
  );
};

export default FloatingElements;
