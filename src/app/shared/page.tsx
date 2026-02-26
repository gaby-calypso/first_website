"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar/Navbar";
import { CocktailCard } from "@/components/CocktailCard/CocktailCard";
import { getCocktailById, Cocktail } from "@/services/cocktails";

function SharedContent() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const ids = searchParams.get("ids")?.split(",") || [];
    Promise.all(ids.map((id) => getCocktailById(id))).then((results) =>
      setCocktails(results.filter(Boolean) as Cocktail[]),
    );
  }, [searchParams]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Lista compartida</h1>
      <p className="text-gray-500 mb-6">
        Alguien compartió esta lista de cocteles contigo.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}

export default function SharedList() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<p className="p-8">Cargando...</p>}>
        <SharedContent />
      </Suspense>
    </main>
  );
}
