"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface CocktailCardProps {
  imageUrl: string;
  cocktailName: string;
  category: string;
  onClick: () => void;
}

export const CocktailCard = ({
  imageUrl,
  cocktailName,
  category,
  onClick,
}: CocktailCardProps) => {
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
      </div>
      <CardContent className="p-4 flex flex-col gap-1">
        <p className="text-xs text-amber-500 font-semibold uppercase tracking-widest">
          {category}
        </p>
        <p style={{ fontSize: "18px", fontWeight: 700 }}>{cocktailName}</p>
      </CardContent>
    </Card>
  );
};

export default CocktailCard;
