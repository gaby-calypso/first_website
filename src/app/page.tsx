"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { CocktailCard } from "@/components/CocktailCard/CocktailCard";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { searchCocktails, Cocktail } from "@/services/cocktails";

export default function Home() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const router = useRouter();

  useEffect(() => {
    searchCocktails("a").then(setCocktails);
  }, []);

  const handleSearch = (query: string) => {
    if (query.length > 2) {
      searchCocktails(query).then(setCocktails);
    } else if (query.length === 0) {
      searchCocktails("a").then(setCocktails);
    }
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            id={cocktail.idDrink}
            imageUrl={cocktail.strDrinkThumb}
            cocktailName={cocktail.strDrink}
            category={cocktail.strCategory}
            onClick={() => router.push(`/cocktail/${cocktail.idDrink}`)}
          />
        ))}
      </div>
    </main>
  );
}
