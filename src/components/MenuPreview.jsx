
export default function MenuPreview() {
  return (
    <section
      id="food-menu"
      className="relative overflow-hidden bg-[#f7efdf] text-[#351015]"
    >
      <div className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top,#711b27_0%,#430b13_48%,#250509_100%)] px-5 py-20 text-center sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(#f2d18b_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#f0d392] sm:text-xs">
            Pure Taste, Pure Blessings
          </p>

          <p className="mb-1 font-serif text-3xl text-[#f5d991]">
            श्री
          </p>

          <h2 className="font-serif text-4xl font-semibold italic leading-[1.04] tracking-tight text-[#fff0c9] sm:text-6xl lg:text-7xl">
            A Feast of Flavours
          </h2>

          <div className="mx-auto my-6 h-px w-24 bg-[#d8b56b]" />

          <p className="mx-auto max-w-2xl font-serif text-base leading-7 text-[#f2dfc2] sm:text-lg">
            From golden dosas and comforting uttapam to
            wok-tossed Chinese favourites, discover something
            delicious for every craving.
          </p>

          <a
            href="/menu"
            className="mt-8 inline-flex items-center rounded-full border border-[#e7c77e] bg-[#e7c77e] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#350910] transition hover:bg-transparent hover:text-[#ffedc6]"
          >
            Explore the Menu <span className="ml-3">↓</span>
          </a>
        </div>

        <div className="pointer-events-none absolute -left-24 top-12 -z-10 h-64 w-64 rounded-full border border-[#e7c77e]/20 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full border border-[#e7c77e]/20 sm:h-96 sm:w-96" />
      </div>
    </section>
  );
}
