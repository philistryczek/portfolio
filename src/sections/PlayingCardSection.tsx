import { motion } from "framer-motion";

interface PlayingCardSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  features: React.ReactNode[];
  reverse?: boolean;
  rotation?: number;
}

export default function PlayingCardSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  features,
  reverse = false,
  rotation = -6,
}: PlayingCardSectionProps) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: reverse
            ? "radial-gradient(ellipse at 20% 50%, rgba(120, 0, 30, 0.15) 0%, transparent 70%)"
            : "radial-gradient(ellipse at 80% 50%, rgba(120, 0, 30, 0.15) 0%, transparent 70%)",
        }}
      />

      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-12 lg:gap-20`}
      >
        {/* Card Image with Hover Effect & Rotation */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: reverse ? 80 : -80, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <motion.div
            className="relative w-[240px] sm:w-[300px] md:w-[360px]"
            style={{
              perspective: 800,
              transform: `rotate(${rotation}deg)`,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              z: 50,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-contain rounded-xl"
              style={{
                filter: "drop-shadow(0 0 40px rgba(180, 0, 40, 0.25)) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.8))",
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                filter: "drop-shadow(0 0 60px rgba(200, 30, 60, 0.5)) drop-shadow(0 30px 80px rgba(0, 0, 0, 0.9))",
              }}
            />
            {/* Hover glow overlay */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 30%, rgba(200, 30, 60, 0.15), transparent 70%)",
                opacity: 0,
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-start"
          initial={{ opacity: 0, x: reverse ? -60 : 60, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.0,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          {/* Subtitle */}
          <span
            className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4"
            style={{
              color: "rgba(200, 50, 50, 0.8)",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {subtitle}
          </span>

          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              color: "#ffffff",
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: "0.08em",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>

          {/* Divider line */}
          <div
            className="w-16 h-[2px] mb-6"
            style={{
              background: "linear-gradient(90deg, rgba(180, 0, 40, 0.8), transparent)",
            }}
          />

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontFamily: "'Inter', system-ui, sans-serif",
              lineHeight: 1.8,
            }}
          >
            {description}
          </p>

          {/* Feature list */}
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "rgba(180, 0, 40, 0.8)" }}
                />
                <span
                  className="text-xs sm:text-sm tracking-wide"
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
