"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { CocktailCard } from "@/components/CocktailCard/CocktailCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="p-8 grid grid-cols-3 gap-6">
        <CocktailCard
          imageUrl="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
          cocktailName="Margarita"
          category="Clásico"
          onClick={() => alert("clicked!")}
        />
        <CocktailCard
          imageUrl="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
          cocktailName="Mojito"
          category="Tropical"
          onClick={() => alert("clicked!")}
        />
        <CocktailCard
          imageUrl="https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"
          cocktailName="Old Fashioned"
          category="Clásico"
          onClick={() => alert("clicked!")}
        />
      </div>
    </main>
  );
}
