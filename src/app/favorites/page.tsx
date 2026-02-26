"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar/Navbar";
import { CocktailCard } from "@/components/CocktailCard/CocktailCard";
import { getCocktailById, Cocktail } from "@/services/cocktails";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Cocktail[]>([]);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("favorites") || "[]");
    Promise.all(ids.map((id: string) => getCocktailById(id))).then((results) =>
      setFavorites(results.filter(Boolean) as Cocktail[]),
    );
  }, []);

  const handleShare = () => {
    const ids = JSON.parse(localStorage.getItem("favorites") || "[]");
    const url = `${window.location.origin}/shared?ids=${ids.join(",")}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (favorites.length === 0) {
    return (
      <main>
        <Navbar />
        <div className="p-8 text-center">
          <p className="text-gray-500 text-lg">
            No tienes cocteles favoritos todavía.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Mis Favoritos</h1>
          <button
            onClick={handleShare}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full transition-colors"
          >
            {copied ? "¡Link copiado!" : "Compartir lista"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((cocktail) => (
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
      </div>
    </main>
  );
}
