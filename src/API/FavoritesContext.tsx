import React, { createContext, useState, useContext, ReactNode } from "react";

interface FavoritesContextType {
  favorites: any[];
  addToFavorites: (item: any) => void;
  removeFromFavorites: (itemId: string) => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addToFavorites = (item: any) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (itemId: string) => {
    setFavorites(favorites.filter((item) => item.id !== itemId));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
