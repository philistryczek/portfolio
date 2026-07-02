import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

function useDecryptionText(
  finalText: string,
  trigger: boolean,
  duration: number = 1200
) {
  const [display, setDisplay] = useState(finalText);

  useEffect(() => {
    if (!trigger) return;

    const length = finalText.length;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealedCount = Math.floor(progress * length);

      let result = "";
      for (let i = 0; i < length; i++) {
        if (finalText[i] === " ") {
          result += " ";
        } else if (i < revealedCount) {
          result += finalText[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(result);

      if (progress >= 1) {
        clearInterval(interval);
        setDisplay(finalText);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [trigger, finalText, duration]);

  return display;
}

export default function Hero() {
  const [startDecrypt, setStartDecrypt] = useState(false);

  // Start decryption after sigma image fades in
  useEffect(() => {
    const timer = setTimeout(() => setStartDecrypt(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const titleText = useDecryptionText("Hallo :)", startDecrypt, 1500);
  const subtitleText = useDecryptionText(
    "Schön, dass DU da bist",
    startDecrypt,
    2000
  );

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Sigma Image */}
      <motion.div
        className="relative z-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
      >
        <img
          src="/images/sigma.png"
          alt="Sigma Symbol"
          className="w-full h-full object-contain"
          style={{
            filter: "drop-shadow(0 0 60px rgba(180, 0, 40, 0.4)) drop-shadow(0 0 120px rgba(180, 0, 39, 0.01))",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.6) 72%, rgba(0,0,0,0.2) 88%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.6) 72%, rgba(0,0,0,0.2) 88%, rgba(0,0,0,0) 100%)",
          }}
        />
      </motion.div>

      {/* Title - positioned over the sigma with decryption effect */}
      <motion.div
        className="absolute z-10 flex flex-col items-center"
        style={{ top: "45%", transform: "translateY(-10%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      >
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-center"
          style={{
            color: "#ffffff",
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            letterSpacing: "0.2em",
            textShadow: "0 0 40px rgba(180, 0, 40, 0.6), 0 0 80px rgba(180, 0, 40, 0.3), 0 4px 20px rgba(0, 0, 0, 0.9)",
          }}
        >
          {titleText}
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="absolute z-10 text-sm sm:text-base md:text-lg text-center px-6"
        style={{
          bottom: "18%",
          color: "rgba(255, 255, 255, 0.5)",
          fontFamily: "'Inter', system-ui, sans-serif",
          letterSpacing: "0.2em",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      >
        {subtitleText}
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.0,
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(255, 255, 255, 0.3)" }}
        >
          
        </span>
        <motion.div
          className="w-[1px] h-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
