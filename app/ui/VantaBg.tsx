"use client"
import { useEffect, useRef, useState } from 'react';

declare global {
  interface VANTAEffect {
    destroy: () => void;
  }

  interface Window {
    VANTA: {
      WAVES: (options: any) => VANTAEffect;
      // Add WAVES, BIRDS, etc. if needed
    };
  }
}

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<VANTAEffect | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !vantaEffect && window.VANTA?.WAVES) {
      setVantaEffect(
        window.VANTA.WAVES({
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0,
          shininess: 23.00,
          waveHeight: 20.50,
          waveSpeed: 0.50,
          zoom: 1.15
        }) 
        
      );
      console.log('VANTA:', window.VANTA?.WAVES);
    }
    console.log('VANTA:', window.VANTA?.WAVES);
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="w-full h-screen border bg-blue-600" />;
}

