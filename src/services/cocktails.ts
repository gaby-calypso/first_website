export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
}

export const getDifficulty = (cocktail: Cocktail): string => {
  const ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
  ].filter(Boolean);

  if (ingredients.length <= 3) return "Fácil";
  if (ingredients.length <= 5) return "Medio";
  return "Difícil";
};

export const searchCocktails = async (query: string): Promise<Cocktail[]> => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await response.json();
  return data.drinks || [];
};

export const getCocktailById = async (id: string): Promise<Cocktail | null> => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.drinks ? data.drinks[0] : null;
};

export const getCategories = async (): Promise<string[]> => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
  );
  const data = await response.json();
  return data.drinks.map((d: { strCategory: string }) => d.strCategory);
};

export const getCocktailsByCategory = async (category: string): Promise<Cocktail[]> => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const data = await response.json();
  return data.drinks || [];
};