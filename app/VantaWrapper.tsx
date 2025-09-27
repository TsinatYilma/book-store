// components/VantaWaves.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import p5 from "p5";

type VantaEffectInstance = {
  destroy: () => void;
  setOptions?: (options: any) => void;
};

export default function VantaTopology({ children }: { children?: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffectInstance | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        TOPOLOGY({
          el: vantaRef.current,
          p5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 20000.0,
          minWidth: 0,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x8c24d6,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative w-full min-h-screen flex  justify-center border border-red-700">
      <div className=" top-30 inset-0 z-10">{children}</div>
    </div>
  );
}

