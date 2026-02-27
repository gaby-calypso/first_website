"use client";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 md:px-8">
      <input
        type="text"
        placeholder="Busca un coctel..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base text-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
      />
    </div>
  );
};

export default SearchBar;
