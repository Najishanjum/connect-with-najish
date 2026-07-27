interface ActionButtonProps {
  href: string;
  index: string;
  label: string;
  meta?: string;
  isEmail?: boolean;
}

const ActionButton = ({ href, index, label, meta, isEmail }: ActionButtonProps) => {
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center gap-3 border-b border-dashed border-foreground/40 py-3 transition-colors hover:border-primary sm:gap-4"
    >
      <span className="shrink-0 font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
        {index}
      </span>
      <span className="min-w-0 flex-1 font-display text-[15px] uppercase leading-tight tracking-tight transition-colors group-hover:text-primary sm:text-lg">
        {label}
        {meta && (
          <span className="mt-0.5 block font-mono-ui text-[9px] tracking-widest text-muted-foreground group-hover:text-muted-foreground sm:hidden">
            {meta}
          </span>
        )}
      </span>
      {meta && (
        <span className="hidden font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
          {meta}
        </span>
      )}
      <span className="shrink-0 font-mono-ui text-sm transition-transform group-hover:translate-x-1 sm:ml-3">
        →
      </span>
    </a>
  );
};

export default ActionButton;
