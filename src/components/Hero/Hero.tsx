export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 flex flex-col items-center text-center gap-4 md:gap-6">
      <p className="text-amber-500 font-semibold tracking-widest uppercase text-xs md:text-sm">
        Descubre el arte de los cocteles
      </p>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
        Cada trago cuenta una historia
      </h1>
      <p className="text-gray-500 text-base md:text-lg max-w-xl">
        Explora recetas clásicas y modernas, aprende técnicas de bartending y
        encuentra el coctel perfecto para cada ocasión.
      </p>
      <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 md:px-8 py-3 rounded-full transition-colors">
        Explorar cocteles
      </button>
    </section>
  );
};

export default Hero;
