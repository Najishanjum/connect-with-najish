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
      className="font-poppins font-bold text-sm text-center block"
      style={{
        backgroundColor: "var(--color-btn-bg)",
        border: "2px solid black",
        borderRadius: "12px",
        padding: "12px 16px",
        boxShadow: hovered
          ? "6px 6px 0px black, 0 0 20px rgba(79, 195, 247, 0.6)"
          : "4px 4px 0px black",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        color: "#000",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon} {label}
    </a>
  );
};

export default ActionButton;
