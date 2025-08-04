// components/AboutHero.tsx

export default function AboutHero() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Left Text Section */}
        <div>
          <h1 className="mb-6 text-3xl leading-tight font-bold text-black md:text-5xl">
            Nintendo has been shaping
            <br className="hidden md:block" />
            the world of entertainment and innovation since{" "}
            <span className="rounded-md bg-red-200 px-2 py-1">1889.</span>
          </h1>
          <p className="text-sm text-gray-800 md:text-base">
            With a legacy that began in <b>1889</b>, Nintendo continues to push
            the boundaries of entertainment by combining timeless storytelling
            with cutting-edge innovation. It`s not just about games — it`s about
            creating joy.
          </p>
        </div>

        {/* Right Video/Media Section */}
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/gZoLrfLcIVg"
            title="Nintendo Company Profile"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
