import profileImg from "@/assets/profile.jpg";
import FloatingElements from "./FloatingElements";
import SocialIcons from "./SocialIcons";
import ActionButton from "./ActionButton";
import ISTClock from "./ISTClock";

const ProfileCard = () => {
  return (
    <div
      className="relative mx-auto w-full max-w-5xl px-5 py-8 sm:px-10"
      style={{ animation: "fadeUp 0.7s ease forwards" }}
    >
      <FloatingElements />

      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-5">
        <span className="font-mono-ui text-[10px] uppercase tracking-widest sm:text-xs">
          Dossier // Confidential
        </span>
        <ISTClock />
      </div>

      {/* Name */}
      <h1 className="font-display text-[15vw] uppercase leading-[0.82] tracking-tighter sm:text-[9rem]">
        <span className="text-primary">Najish</span>{" "}
        <span className="text-foreground">Anjum</span>
      </h1>

      <div className="mt-5 h-[3px] w-full bg-foreground" />

      {/* Meta row */}
      <div className="grid gap-6 py-6 md:grid-cols-2">
        <div>
          <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
            Core Focus
          </p>
          <p className="mt-2 font-mono-ui text-sm uppercase tracking-wide">
            AI / ML · Full Stack · Agentic Systems
          </p>
        </div>
        <div className="md:border-l-2 md:border-foreground md:pl-6">
          <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
            System Prompt
          </p>
          <p className="mt-2 font-mono-ui text-sm uppercase tracking-wide">
            Build Ajinava Edge · I Lead Team ILM Tech
          </p>
        </div>
      </div>

      <div className="h-[2px] w-full bg-foreground" />

      {/* Main grid */}
      <div className="grid gap-8 py-8 md:grid-cols-[240px_1fr]">
        {/* Left column */}
        <div className="md:border-r-2 md:border-foreground md:pr-6">
          <div className="mb-5 border-2 border-foreground bg-card p-2">
            <img
              src={profileImg}
              alt="Md Najish Anjum, AI/ML developer"
              className="h-56 w-full object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
              width={480}
              height={560}
            />
          </div>
          <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
            Subject
          </p>
          <p className="mt-1 font-display text-base uppercase">Md Najish Anjum</p>
          <p className="mt-3 font-mono-ui text-xs leading-relaxed text-muted-foreground">
            AI/ML Developer &amp; Full Stack Builder. Shipping products, tools and
            agents from India.
          </p>

          <div className="mt-5 border-t border-dashed border-foreground/40 pt-4">
            <p className="mb-3 font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
              Channels
            </p>
            <SocialIcons />
          </div>
        </div>

        {/* Right column */}
        <div>
          <div className="flex items-baseline gap-3 border-b-2 border-foreground pb-2">
            <h2 className="font-display text-xl uppercase tracking-tight">
              Access_Log
            </h2>
            <span className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
              06 Entries
            </span>
          </div>

          <div className="mt-2">
            <ActionButton
              index="01"
              href="https://chat.whatsapp.com/IJw256xuepP956JsufMY6g"
              label="Join Community"
              meta="WhatsApp"
            />
            <ActionButton
              index="02"
              href="https://najish-anjum-portfolio.vercel.app/"
              label="View Portfolio"
              meta="Vercel"
            />
            <ActionButton
              index="03"
              href="https://github.com/Najishanjum"
              label="GitHub Projects"
              meta="Source"
            />
            <ActionButton
              index="04"
              href="https://teamilmtech.site"
              label="Work With Me"
              meta="Team ILM Tech"
            />
            <ActionButton
              index="05"
              href="https://www.linkedin.com/in/md-najish-anjum-044078328"
              label="LinkedIn"
              meta="Network"
            />
            <ActionButton
              index="06"
              href="mailto:najishanjum058@gmail.com"
              label="Contact Me"
              meta="Email"
              isEmail
            />
          </div>
        </div>
      </div>

      <div className="h-[3px] w-full bg-foreground" />

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-4">
        <a
          href="https://najish-anjum-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-ui text-[10px] uppercase tracking-widest hover:text-primary sm:text-xs"
        >
          www.najish-anjum-portfolio.vercel.app
        </a>
        <span className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
          END // FILE
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
