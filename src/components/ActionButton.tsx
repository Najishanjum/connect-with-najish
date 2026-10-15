import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandIcon } from "./BrandIcons";

interface ActionButtonProps {
  href: string;
  index: string;
  label: string;
  iconName: string;
  meta?: string;
}

const ActionButton = ({ href, index, label, iconName, meta }: ActionButtonProps) => {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const isEmail = href.startsWith("mailto:");

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(href);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    window.setTimeout(() => setCopyState("idle"), 1800);
  };

  return (
    <div className="flex min-h-11 items-center gap-2 border-b border-dashed border-foreground/40 py-2 sm:gap-3">
      <a
        href={href}
        target={isEmail ? undefined : "_blank"}
        rel="noopener noreferrer"
        aria-label={`${label}${meta ? ` — ${meta}` : ""}: ${href}${isEmail ? "" : " (opens in a new tab)"}`}
        className="group flex min-w-0 flex-1 items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:gap-3"
      >
        <span aria-hidden="true" className="shrink-0 font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
          {index}
        </span>
        <BrandIcon name={iconName} className="h-4 w-4 shrink-0 text-foreground" />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="font-display text-[15px] uppercase leading-tight transition-colors group-hover:text-primary sm:text-lg">
              {label}
            </span>
            {meta && (
              <span className="font-mono-ui text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                {meta}
              </span>
            )}
          </span>
          <span className="mt-1 block break-all font-mono-ui text-[9px] leading-relaxed text-muted-foreground normal-case sm:text-[10px]">
            {href}
          </span>
        </span>
        <span aria-hidden="true" className="shrink-0 font-mono-ui text-sm transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={copyLink}
        title={copyState === "copied" ? "Link copied" : copyState === "error" ? "Copy failed" : "Copy link"}
        aria-label={copyState === "copied" ? `Copied ${label} link` : copyState === "error" ? `Could not copy ${label} link` : `Copy ${label} link`}
        className="h-11 w-11 shrink-0 rounded-none border border-foreground bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground"
      >
        {copyState === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      </Button>
      <span role="status" aria-live="polite" className="sr-only">
        {copyState === "copied" ? `${label} link copied` : copyState === "error" ? `Unable to copy ${label} link` : ""}
      </span>
    </div>
  );
};

export default ActionButton;
