import React, { createContext, useState, useContext, ReactNode } from "react";

interface CarritosContextType {
  carritos: any[];
  addToCarritos: (item: any) => void;
  removeFromCarritos: (itemId: string) => void;
}

interface CarritosProviderProps {
  children: ReactNode;
}

const CarritosContext = createContext<CarritosContextType | undefined>(
  undefined
);

export const CarritosProvider: React.FC<CarritosProviderProps> = ({
  children,
}) => {
  const [carritos, setCarritos] = useState<any[]>([]);

  const addToCarritos = (item: any) => {
    setCarritos([...carritos, item]);
  };

  const removeFromCarritos = (itemId: string) => {
    setCarritos(carritos.filter((item) => item.id !== itemId));
  };

  return (
    <CarritosContext.Provider
      value={{ carritos, addToCarritos, removeFromCarritos }}
    >
      {children}
    </CarritosContext.Provider>
  );
};

export const useCarritos = () => {
  const context = useContext(CarritosContext);
  if (!context) {
    throw new Error("useCarritos must be used within a CarritosProvider");
  }
  return context;
};
