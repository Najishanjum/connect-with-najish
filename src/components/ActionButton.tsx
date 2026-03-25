import { useState } from "react";

interface ActionButtonProps {
  href: string;
  icon: string;
  label: string;
  isEmail?: boolean;
}

const ActionButton = ({ href, icon, label, isEmail }: ActionButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="font-bold text-sm text-center block"
      style={{
        fontFamily: "'Courier New', monospace",
        backgroundColor: hovered
          ? "rgba(0, 255, 65, 0.15)"
          : "rgba(0, 255, 65, 0.05)",
        border: "1px solid rgba(0, 255, 65, 0.3)",
        borderRadius: "12px",
        padding: "12px 16px",
        boxShadow: hovered
          ? "0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.05)"
          : "0 0 10px rgba(0, 255, 65, 0.1)",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "all 0.3s ease",
        color: "#00ff41",
        textDecoration: "none",
        textShadow: hovered ? "0 0 10px rgba(0, 255, 65, 0.5)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon} {label}
    </a>
  );
};

export default ActionButton;
