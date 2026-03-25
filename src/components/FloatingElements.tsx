const FloatingElements = () => {
  return (
    <>
      {/* Neon dot - green */}
      <div
        className="absolute top-4 left-4 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "#00ff41",
          boxShadow: "0 0 10px #00ff41, 0 0 20px rgba(0, 255, 65, 0.3)",
          animation: "float 3s ease-in-out infinite",
        }}
      />

      {/* Neon dot - teal */}
      <div
        className="absolute top-8 right-6 w-3 h-3 rounded-full"
        style={{
          backgroundColor: "#00ffcc",
          boxShadow: "0 0 10px #00ffcc, 0 0 20px rgba(0, 255, 204, 0.3)",
          animation: "float-delay 3s ease-in-out infinite",
          opacity: 0.7,
        }}
      />

      {/* Small bracket decoration */}
      <div
        className="absolute bottom-20 left-3 text-xs"
        style={{
          color: "rgba(0, 255, 65, 0.3)",
          fontFamily: "'Courier New', monospace",
          animation: "float-slow 3s ease-in-out infinite",
        }}
      >
        {"{ }"}
      </div>

      {/* Code bracket */}
      <div
        className="absolute bottom-32 right-4 text-xs"
        style={{
          color: "rgba(0, 255, 204, 0.3)",
          fontFamily: "'Courier New', monospace",
          animation: "float 3s ease-in-out infinite 0.5s",
        }}
      >
        {"< />"}
      </div>

      {/* Tiny dot */}
      <div
        className="absolute top-1/2 left-1 w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: "#00ff41",
          opacity: 0.4,
          boxShadow: "0 0 6px rgba(0, 255, 65, 0.4)",
          animation: "float-delay 3s ease-in-out infinite 1s",
        }}
      />

      {/* Spinning character */}
      <div
        className="absolute top-1/3 right-2 text-xs"
        style={{
          color: "rgba(0, 255, 65, 0.2)",
          fontFamily: "'Courier New', monospace",
          animation: "spin-slow 6s linear infinite",
        }}
      >
        *
      </div>
    </>
  );
};

export default FloatingElements;
