import ProfileCard from "@/components/ProfileCard";
import MatrixRain from "@/components/MatrixRain";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-black overflow-hidden">
      <MatrixRain />
      {/* Gradient overlay for depth */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
          zIndex: 1,
        }}
      />
      <div className="relative" style={{ zIndex: 2 }}>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Index;
