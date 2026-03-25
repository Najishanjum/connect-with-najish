import { useEffect, useState } from "react";

const formatIST = () => {
  const now = new Date();
  const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  const hours = ist.getHours();
  const minutes = ist.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const h12 = hours % 12 || 12;
  const mm = minutes.toString().padStart(2, "0");

  const day = ist.getDate();
  const month = ist.toLocaleString("en-US", { month: "long", timeZone: "Asia/Kolkata" });
  const year = ist.getFullYear();

  return {
    time: `${h12}:${mm} ${ampm}`,
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
    <div
      className="text-center font-poppins mt-4 text-xs font-medium"
      style={{ color: "var(--color-subtitle)" }}
    >
      <p>
        {clock.time}·{clock.date}
      </p>
      <p className="text-[10px] mt-0.5 tracking-wide">India · UTC+5:30</p>
    </div>
  );
};

export default ISTClock;
