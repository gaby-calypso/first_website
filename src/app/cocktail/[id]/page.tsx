"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getCocktailById,
  getCocktailsByCategory,
  Cocktail,
} from "@/services/cocktails";
import { CocktailCard } from "@/components/CocktailCard/CocktailCard";

export default function CocktailDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [recommendations, setRecommendations] = useState<Cocktail[]>([]);

  useEffect(() => {
    if (id) {
      getCocktailById(id as string).then((data) => {
        setCocktail(data);
        if (data?.strCategory) {
          getCocktailsByCategory(data.strCategory).then((results) => {
            setRecommendations(
              results.filter((c) => c.idDrink !== id).slice(0, 3),
            );
          });
        }
      });
    }
  }, [id]);

  if (!cocktail) {
    return (
      <main className="p-8">
        <p>Cargando...</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link
        href="/"
        className="text-amber-500 hover:text-amber-600 font-semibold mb-6 inline-block"
      >
        ← Volver
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
            {cocktail.strCategory}
          </p>
          <h1 className="text-4xl font-bold">{cocktail.strDrink}</h1>
          <p className="text-gray-500 leading-relaxed">
            {cocktail.strInstructions}
          </p>
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">También te puede gustar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recommendations.map((rec) => (
              <CocktailCard
                key={rec.idDrink}
                id={rec.idDrink}
                imageUrl={rec.strDrinkThumb}
                cocktailName={rec.strDrink}
                category={rec.strCategory}
                onClick={() => router.push(`/cocktail/${rec.idDrink}`)}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
