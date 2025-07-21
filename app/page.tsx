import Image from "next/image";
import IntroText from "@/app/ui/introText";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 border-2">
      <IntroText />
    </div>
  );
}
