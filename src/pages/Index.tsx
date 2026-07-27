import ProfileCard from "@/components/ProfileCard";
import VisitorCounter from "@/components/VisitorCounter";
import paperTexture from "@/assets/paper-texture.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-70 mix-blend-multiply"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <main className="relative z-10 flex min-h-screen items-center justify-center">
        <ProfileCard />
      </main>
      <VisitorCounter />
    </div>
  );
};

export default Index;
