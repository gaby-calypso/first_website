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
    <div className="w-full px-8 flex gap-3 overflow-x-auto pb-2">
      <button
        onClick={() => onSelect("")}
        className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
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
          className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
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
