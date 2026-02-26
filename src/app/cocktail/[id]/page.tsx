"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCocktailById, Cocktail } from "@/services/cocktails";

export default function CocktailDetail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    if (id) {
      getCocktailById(id as string).then(setCocktail);
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
    </main>
  );
}
