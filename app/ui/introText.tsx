import { gabarito, handlee } from "@/app/ui/fonts";

export default function IntroText() {
  return (
    <div className={gabarito.className + "flex justify-center w-full mb-8"}>
       <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[64px] mx-auto w-fit text-center font-extrabold tracking-[0em] leading-[1.2] text-transparent "
  style={{
    background: 'linear-gradient(to right, #238E8E 0%, #FFFFFF 30%, #FFFFFF 70%, #238E8E 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}>
    Your Ultimate Guide to <br/> Ethiopian Orthodox Books</h1>
    <p className={handlee.className + " text-[8px] sm:text-[12px] text-center "}>Explore books from the Ethiopian Orthodox Tewahedo Church <br /> by <span className="font-bold text-[#238E8E]">theme</span>, <span className="font-bold text-[#238E8E]">topic</span>, or <span className="font-bold text-[#238E8E]">traditional genre</span>.</p>
    </div>
  );
}