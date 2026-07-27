import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const recordAndFetch = async () => {
      await supabase.from("page_visits").insert({});

      const { count: total } = await supabase
        .from("page_visits")
        .select("*", { count: "exact", head: true });

      setCount(total ?? 0);
    };

    recordAndFetch();
  }, []);

  if (count === null) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 border-2 border-foreground bg-card px-3 py-1.5 font-mono-ui text-xs uppercase tracking-widest">
      <span className="text-muted-foreground">Visits</span>
      <span className="font-bold text-primary">
        {count.toLocaleString(undefined, { minimumIntegerDigits: 4, useGrouping: false })}
      </span>
    </div>
  );
};

export default VisitorCounter;
