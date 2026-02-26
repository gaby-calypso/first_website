"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { CocktailCard } from "@/components/CocktailCard/CocktailCard";
import { searchCocktails, Cocktail } from "@/services/cocktails";

export default function Home() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    searchCocktails("a").then(setCocktails);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            imageUrl={cocktail.strDrinkThumb}
            cocktailName={cocktail.strDrink}
            category={cocktail.strCategory}
            onClick={() => console.log(cocktail.idDrink)}
          />
        ))}
      </div>
    </main>
  );
}
