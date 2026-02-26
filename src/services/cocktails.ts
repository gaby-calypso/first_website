export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
  strInstructions: string;
}

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