import { useEffect, useState } from "react";

const formatIST = () => {
  const now = new Date();
  const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  const hours = ist.getHours();
  const minutes = ist.getMinutes();
  const seconds = ist.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;
  const pad = (n: number) => n.toString().padStart(2, "0");

  const day = ist.getDate();
  const month = ist.toLocaleString("en-US", { month: "long", timeZone: "Asia/Kolkata" });
  const year = ist.getFullYear();

  return {
    time: `${h12}:${pad(minutes)}:${pad(seconds)} ${ampm}`,
    date: `${day} ${month}, ${year}`,
  };
};

const ISTClock = () => {
  const [clock, setClock] = useState(formatIST);

  useEffect(() => {
    const interval = setInterval(() => setClock(formatIST()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      role="timer"
      aria-live="off"
      aria-label={`Current India Standard Time ${clock.time}, ${clock.date}`}
      className="font-mono-ui text-[9px] uppercase leading-relaxed tracking-widest text-muted-foreground sm:text-xs"
    >
      T: {clock.time} IST{" "}
      <span className="hidden sm:inline">· </span>
      <span className="block sm:inline">
        {clock.date} · UTC+5:30
      </span>
    </span>
  );
};

export default ISTClock;
