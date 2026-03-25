import profileImg from "@/assets/profile.jpg";
import { Mail, Github, Globe, MessageCircle } from "lucide-react";
import FloatingElements from "./FloatingElements";
import SocialIcons from "./SocialIcons";
import ActionButton from "./ActionButton";

const ProfileCard = () => {
  return (
    <div
      className="relative w-full max-w-[420px] rounded-[2rem] p-6 pb-8 mx-auto"
      style={{
        backgroundColor: "var(--color-card-bg)",
        animation: "fadeUp 0.8s ease forwards",
      }}
    >
      <FloatingElements />

      {/* Profile Image - Polaroid Style */}
      <div className="flex justify-center mb-6 mt-4">
        <div
          className="relative group cursor-pointer"
          style={{
            transform: "rotate(-5deg)",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "rotate(0deg) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotate(-5deg) scale(1)";
          }}
        >
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "6px solid white",
              boxShadow: "4px 6px 16px rgba(0,0,0,0.15)",
              backgroundColor: "white",
              padding: "4px",
            }}
          >
            <img
              src={profileImg}
              alt="Md Najish Anjum"
              className="w-40 h-48 object-cover object-top rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 className="font-bungee text-center text-2xl tracking-wide mb-1">
        <span style={{ color: "var(--color-blue)" }}>MD NAJISH </span>
        <span className="text-foreground">ANJUM</span>
      </h1>

      {/* Subtitle */}
      <p
        className="font-poppins text-center text-sm font-medium mb-5"
        style={{ color: "var(--color-subtitle)" }}
      >
        AI/ML Developer & Full Stack Builder
      </p>

      {/* Social Icons */}
      <SocialIcons />

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-6">
        <ActionButton
          href="https://chat.whatsapp.com/IJw256xuepP956JsufMY6g"
          icon="📞"
          label="Join Community"
        />
        <ActionButton
          href="https://najish-anjum-portfolio.vercel.app/"
          icon="💼"
          label="View Portfolio"
        />
        <ActionButton
          href="https://github.com/Najishanjum"
          icon="🚀"
          label="GitHub Projects"
        />
        <ActionButton
          href="mailto:najishanjum058@gmail.com"
          icon="✉️"
          label="Contact Me"
          isEmail
        />
      </div>
    </div>
  );
};

export default ProfileCard;
