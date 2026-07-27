import profileImg from "@/assets/profile.jpg";
import FloatingElements from "./FloatingElements";
import SocialIcons from "./SocialIcons";
import ActionButton from "./ActionButton";
import ISTClock from "./ISTClock";

const ProfileCard = () => {
  return (
    <div
      className="relative mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-10 sm:py-8"
      style={{ animation: "fadeUp 0.7s ease forwards" }}
    >
      <FloatingElements />

      {/* Top bar */}
      <div className="flex flex-col gap-1 pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2 sm:pb-5">
        <span className="font-mono-ui text-[10px] uppercase tracking-widest sm:text-xs">
          Dossier // Confidential
        </span>
        <ISTClock />
      </div>

      {/* Name */}
      <h1 className="font-display text-[16vw] uppercase leading-[0.85] tracking-tighter sm:text-[9rem] sm:leading-[0.82]">
        <span className="text-primary">Najish</span>{" "}
        <span className="text-foreground">Anjum</span>
      </h1>

      <div className="mt-4 h-[3px] w-full bg-foreground sm:mt-5" />

      {/* Meta row */}
      <div className="grid gap-5 py-5 md:grid-cols-2 md:gap-6 md:py-6">
        <div>
          <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
            Core Focus
          </p>
          <p className="mt-2 font-mono-ui text-xs uppercase leading-relaxed tracking-wide sm:text-sm">
            AI / ML · Full Stack · Agentic Systems
          </p>
        </div>
        <div className="border-t border-dashed border-foreground/40 pt-5 md:border-l-2 md:border-t-0 md:border-solid md:border-foreground md:pl-6 md:pt-0">
          <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
            System Prompt
          </p>
          <p className="mt-2 font-mono-ui text-xs uppercase leading-relaxed tracking-wide sm:text-sm">
            Build Ajinava Edge · I Lead Team ILM Tech
          </p>
        </div>
      </div>

      <div className="h-[2px] w-full bg-foreground" />

      {/* Main grid */}
      <div className="grid gap-6 py-6 md:grid-cols-[240px_1fr] md:gap-8 md:py-8">
        {/* Left column */}
        <div className="md:border-r-2 md:border-foreground md:pr-6">
          <div className="mb-5 border-2 border-foreground bg-card p-2">
            <img
              src={profileImg}
              alt="Md Najish Anjum, AI/ML developer"
              className="h-64 w-full object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 sm:h-56"
              width={480}
              height={560}
            />
          </div>
          <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
            Subject
          </p>
          <p className="mt-1 font-display text-base uppercase">Md Najish Anjum</p>
          <p className="mt-3 font-mono-ui text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
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
            <h2 className="font-display text-lg uppercase tracking-tight sm:text-xl">
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
      <div className="flex flex-wrap items-center justify-between gap-1 pt-4 sm:gap-2">
        <a
          href="https://najish-anjum-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="break-all font-mono-ui text-[9px] uppercase tracking-widest hover:text-primary sm:text-xs"
        >
          www.najish-anjum-portfolio.vercel.app
        </a>
        <span className="font-mono-ui text-[9px] uppercase tracking-widest text-muted-foreground sm:text-xs">
          END // FILE
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
