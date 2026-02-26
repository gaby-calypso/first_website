"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CocktailCardProps {
  imageUrl: string;
  cocktailName: string;
  category: string;
  onClick: () => void;
  id: string;
  difficulty?: string;
}

const difficultyStars = {
  Fácil: "⭐",
  Medio: "⭐⭐",
  Difícil: "⭐⭐⭐",
};

export const CocktailCard = ({
  imageUrl,
  cocktailName,
  category,
  onClick,
  id,
  difficulty,
}: CocktailCardProps) => {
  const getFavorites = () =>
    JSON.parse(localStorage.getItem("favorites") || "[]");
  const [favorite, setFavorite] = useState<boolean>(() =>
    getFavorites().includes(id),
  );

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = getFavorites();
    if (favorites.includes(id)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((f: string) => f !== id)),
      );
      setFavorite(false);
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
      setFavorite(true);
    }
  };

  return (
    <Card
      onClick={onClick}
      className="h-[400px] rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative flex-1">
        <Image
          src={imageUrl}
          alt={cocktailName}
          fill
          className="object-cover"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>
      <CardContent className="p-4 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <p className="text-xs text-amber-500 font-semibold uppercase tracking-widest">
            {category}
          </p>
        </div>
        <p style={{ fontSize: "18px", fontWeight: 700 }}>{cocktailName}</p>
        {difficulty && (
          <div className="flex flex-col gap-0.5 mt-1">
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Dificultad
            </p>
            <p>{difficultyStars[difficulty as keyof typeof difficultyStars]}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CocktailCard;
