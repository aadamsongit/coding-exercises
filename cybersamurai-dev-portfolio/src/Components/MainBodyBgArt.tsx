// import { motion } from "framer-motion";
import "../index.css";

// Import the image using new URL() for Vite
const cyberpunksamurai = new URL(
  "../assets/cyberpunksamurai.jpeg",
  import.meta.url
).href;

export default function HeroSection() {
  console.log("Background image URL:", cyberpunksamurai);
  console.log("Background image type:", typeof cyberpunksamurai);

  return (
    <div className="relative w-full h-screen bg-red-500">
      {/* Background Image */}
      <img
        src={cyberpunksamurai}
        alt="Cyberpunk Samurai Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        onLoad={() => console.log("Image loaded successfully")}
        onError={(e) => console.error("Image failed to load:", e)}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      />

      {/* Foreground H1 */}
      <h1
        className="absolute z-10 w-full text-center font-bold font-['Varino'] text-2xl px-4 leading-tight top-1/2 transform -translate-y-1/2"
        style={{
          color: "white",
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
        data-text="WELCOME TO THE GRID"
      >
        WELCOME TO THE GRID
      </h1>
    </div>
  );
}
