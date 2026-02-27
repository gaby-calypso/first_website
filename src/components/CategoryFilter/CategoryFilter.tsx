"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export const CategoryFilter = ({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) => {
  return (
    <div className="w-full px-4 md:px-8 flex gap-2 md:gap-3 overflow-x-auto pb-2 pr-8 md:pr-16">
      <button
        onClick={() => onSelect("")}
        className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-colors ${
          selected === ""
            ? "bg-amber-500 text-white"
            : "border border-gray-300 text-gray-600 hover:border-amber-500 hover:text-amber-500"
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-colors ${
            selected === category
              ? "bg-amber-500 text-white"
              : "border border-gray-300 text-gray-600 hover:border-amber-500 hover:text-amber-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
