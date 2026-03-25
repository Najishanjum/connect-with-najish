import ProfileCard from "@/components/ProfileCard";
import VisitorCounter from "@/components/VisitorCounter";

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "var(--color-pastel-yellow)" }}
    >
      <ProfileCard />
      <VisitorCounter />
    </div>
  );
};

export default Index;
