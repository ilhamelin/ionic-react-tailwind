import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  addProductToCart,
  removeProductFromCart,
  updateProductQuantityInCart,
} from "../firebase/firebase-functions";

export interface Producto {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: string | number;
  ingredients: string;
  cantidad?: number; // Añadimos la propiedad cantidad como opcional
}

interface CarritoContextProps {
  carrito: Producto[];
  addToCarrito: (producto: Producto) => void;
  removeFromCarrito: (id: string) => void;
  updateCantidad: (id: string, cantidad: number) => void; // Nueva función para actualizar la cantidad de un producto en el carrito
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

  const addToCarrito = async (producto: Producto) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
      const newCarrito = [...carrito];
      newCarrito[index].cantidad = (newCarrito[index].cantidad || 0) + 1;
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    try {
      // Ejemplo de obtención del userId (puede variar según cómo manejes la autenticación)
      const userId = getCurrentUserId(); // Función hipotética para obtener el userId actual

      // Opcional: Obtener el idTienda adecuado si es necesario
      const idTienda = getProductStoreId(producto.id); // Función hipotética para obtener el idTienda del producto

      // Llamada a la función de Firebase para agregar al carrito
      await addProductToCart(userId, idTienda, producto.id, 1);
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
      // Manejo de errores según sea necesario
    }
  };

  const removeFromCarrito = async (id: string) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((producto) => producto.id !== id)
    );
    try {
      const userId = getCurrentUserId(); // Función hipotética para obtener el userId actual
      await removeProductFromCart(userId, id);
    } catch (error) {
      console.error("Error al remover producto del carrito:", error);
    }
  };

  const updateCantidad = async (id: string, cantidad: number) => {
    const index = carrito.findIndex((p) => p.id === id);
    if (index !== -1) {
      const newCarrito = [...carrito];
      newCarrito[index].cantidad = cantidad;
      setCarrito(newCarrito);
      try {
        const userId = getCurrentUserId(); // Función hipotética para obtener el userId actual
        await updateProductQuantityInCart(userId, id, cantidad);
      } catch (error) {
        console.error(
          "Error al actualizar la cantidad del producto en el carrito:",
          error
        );
      }
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

function getCurrentUserId() {
  // Implementa la lógica para obtener el ID del usuario actual
  return "userId"; // Reemplaza esto con la lógica real para obtener el userId
}

function getProductStoreId(id: string) {
  // Implementa la lógica para obtener el ID de la tienda del producto
  return "idTienda"; // Reemplaza esto con la lógica real para obtener el idTienda
}
