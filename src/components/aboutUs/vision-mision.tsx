// components/VisionMission.tsx
import Image from "next/legacy/image";

export default function VisionMission() {
  return (
    <section className="relative bg-red-700 px-6 py-20">
      {/* Watermark Title */}
      <h2 className="absolute top-6 left-6 z-10 text-4xl font-bold text-white/40 uppercase md:text-6xl">
        Vision & Mission
      </h2>

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 pt-5 md:grid-cols-2">
        {/* Vision Section */}
        <div className="text-white">
          <Image
            width={500}
            height={500}
            src="/vision-mission/vision.jpg"
            alt="Vision team"
            className="mb-6 h-80 w-full rounded-md object-cover shadow-lg"
          />
          <h3 className="mb-3 text-2xl font-bold">🌟 Vision Statement</h3>
          <blockquote className="border-l-4 border-white pl-4 text-sm leading-relaxed text-white md:text-base">
            To create a world full of smiles through the power of play. We
            believe that games aren`t just about winning or losing — they`re
            about having fun, sharing moments, and sparking joy across all ages.
            At Nintendo, our dream is simple: to make people smile, wherever
            they are in the world.
          </blockquote>
        </div>

        {/* Mission Section */}
        <div className="text-white">
          <Image
            width={500}
            height={500}
            src="/vision-mission/mission.jpg"
            alt="Mission in action"
            className="mb-6 h-80 w-full rounded-md object-cover shadow-lg"
          />
          <h3 className="mb-3 text-2xl font-bold">🎮 Mission Statement</h3>
          <blockquote className="border-l-4 border-white pl-4 text-sm leading-relaxed text-white md:text-base">
            To craft playful, creative, and unforgettable experiences that bring
            people together. From building epic adventures with Mario to
            catching `em all with Pokémon, our mission is to keep pushing the
            boundaries of fun. We mix imagination, storytelling, and innovation
            to deliver games that connect generations, fuel curiosity, and turn
            everyday moments into lasting memories.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
