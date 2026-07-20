import ProfileCard from "@/components/ProfileCard";
import VisitorCounter from "@/components/VisitorCounter";
import bgVideo from "@/assets/bg-neon.mp4.asset.json";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <video
        src={bgVideo.url}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />
      <div className="fixed inset-0 bg-black/30 -z-10" />
      <ProfileCard />
      <VisitorCounter />
    </div>
  );
};

export default Index;
