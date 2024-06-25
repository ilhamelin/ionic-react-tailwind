import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Producto {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: string | number;
  cantidad?: number; // Añadimos la propiedad cantidad como opcional
}

interface CarritoContextProps {
  carrito: Producto[];
  addToCarrito: (producto: Producto) => void;
  removeFromCarrito: (id: number) => void;
  updateCantidad: (id: number, cantidad: number) => void; // Nueva función para actualizar la cantidad de un producto en el carrito
}

interface CarritoProviderProps {
  children: ReactNode;
}

const CarritoContext = createContext<CarritoContextProps | undefined>(
  undefined
);

export const CarritoProvider: React.FC<CarritoProviderProps> = ({
  children,
}) => {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const addToCarrito = (producto: Producto) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
      const newCarrito = [...carrito];
      newCarrito[index].cantidad = (newCarrito[index].cantidad || 0) + 1;
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const removeFromCarrito = (id: number) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((producto) => producto.id !== id)
    );
  };

  const updateCantidad = (id: number, cantidad: number) => {
    const index = carrito.findIndex((p) => p.id === id);
    if (index !== -1) {
      const newCarrito = [...carrito];
      newCarrito[index].cantidad = cantidad;
      setCarrito(newCarrito);
    }
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, addToCarrito, removeFromCarrito, updateCantidad }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe ser usado dentro de un CarritoProvider");
  }
  return context;
};
