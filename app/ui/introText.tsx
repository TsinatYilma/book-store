import { gabarito } from "@/app/ui/fonts";

export default function IntroText() {
  return (
    <div className={gabarito.className + "flex justify-center  w-full border-2 border-white pl-32 pr-32 "}>
       <h1 className="text-[64px] text-center font-Extraold text-transparent border-2 border-white"
  style={{
    background: 'linear-gradient(to right, #238E8E 0%, #FFFFFF4D 30%, #FFFFFF4D 70%, #238E8E 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}>
    Your Ultimate Guide to  Ethiopian Orthodox Books</h1>
    </div>
  );
}