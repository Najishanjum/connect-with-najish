import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const recordAndFetch = async () => {
      // Record this visit
      await supabase.from("page_visits").insert({});

      // Fetch total count
      const { count: total } = await supabase
        .from("page_visits")
        .select("*", { count: "exact", head: true });

      setCount(total ?? 0);
    };

    recordAndFetch();
  }, []);

  if (count === null) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full px-4 py-2 font-poppins text-sm font-bold"
      style={{
        backgroundColor: "var(--color-card-bg)",
        border: "2px solid black",
        boxShadow: "3px 3px 0px black",
      }}
    >
      <span>👁️</span>
      <span>{count.toLocaleString()}</span>
    </div>
  );
};

export default VisitorCounter;
