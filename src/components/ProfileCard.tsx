import profileImg from "@/assets/profile.jpg";
import FloatingElements from "./FloatingElements";
import SocialIcons from "./SocialIcons";
import ActionButton from "./ActionButton";

const ProfileCard = () => {
  return (
    <div
      className="relative w-full max-w-[420px] rounded-[20px] p-6 pb-8 mx-auto"
      style={{
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(0, 255, 65, 0.15)",
        boxShadow:
          "0 0 40px rgba(0, 255, 65, 0.1), 0 0 80px rgba(0, 255, 204, 0.05), inset 0 0 60px rgba(0, 0, 0, 0.3)",
        animation: "fadeUp 0.8s ease forwards",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow =
          "0 0 60px rgba(0, 255, 65, 0.2), 0 0 120px rgba(0, 255, 204, 0.1), inset 0 0 60px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow =
          "0 0 40px rgba(0, 255, 65, 0.1), 0 0 80px rgba(0, 255, 204, 0.05), inset 0 0 60px rgba(0, 0, 0, 0.3)";
      }}
    >
      <FloatingElements />

      {/* Profile Image */}
      <div className="flex justify-center mb-6 mt-4">
        <div
          className="relative group cursor-pointer"
          style={{
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "2px solid rgba(0, 255, 65, 0.3)",
              boxShadow: "0 0 20px rgba(0, 255, 65, 0.2)",
              padding: "3px",
              background: "rgba(0, 0, 0, 0.5)",
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

      {/* Tagline */}
      <p
        className="text-center text-xs font-semibold tracking-widest uppercase mb-2"
        style={{
          color: "#00ffcc",
          fontFamily: "'Courier New', monospace",
          textShadow: "0 0 10px rgba(0, 255, 204, 0.5)",
        }}
      >
        Build Ajinava Edge · I Lead Team ILM Tech
      </p>

      {/* Name */}
      <h1
        className="text-center text-2xl tracking-wide mb-1 font-bold"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        <span
          style={{
            color: "#00ff41",
            textShadow: "0 0 15px rgba(0, 255, 65, 0.6)",
          }}
        >
          MD NAJISH{" "}
        </span>
        <span
          style={{
            color: "#00ffcc",
            textShadow: "0 0 15px rgba(0, 255, 204, 0.6)",
          }}
        >
          ANJUM
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="text-center text-sm font-medium mb-5"
        style={{
          color: "#aaaaaa",
          fontFamily: "'Courier New', monospace",
        }}
      >
        AI/ML Developer | Builder | Innovator
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
          href="https://teamilmtech.site"
          icon="🤝"
          label="Work With Me"
        />
        <ActionButton
          href="https://www.linkedin.com/in/md-najish-anjum-044078328"
          icon="💼"
          label="LinkedIn"
        />
        <ActionButton
          href="mailto:najishanjum058@gmail.com"
          icon="✉️"
          label="Contact Me"
          isEmail
        />
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <a
          href="https://najish-anjum-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium"
          style={{
            color: "#555",
            fontFamily: "'Courier New', monospace",
          }}
        >
          www.najish-anjum-portfolio.vercel.app
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
