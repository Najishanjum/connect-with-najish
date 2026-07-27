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
      className="group flex items-center gap-4 border-b border-dashed border-foreground/40 py-3 transition-colors hover:border-primary"
    >
      <span className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
        {index}
      </span>
      <span className="font-display text-lg uppercase tracking-tight transition-colors group-hover:text-primary">
        {label}
      </span>
      {meta && (
        <span className="ml-auto hidden font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
          {meta}
        </span>
      )}
      <span className="ml-auto font-mono-ui text-sm transition-transform group-hover:translate-x-1 sm:ml-3">
        →
      </span>
    </a>
  );
};

export default ActionButton;
