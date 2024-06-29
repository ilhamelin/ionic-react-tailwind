import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonToast,
} from "@ionic/react";
import { FaArrowLeft } from "react-icons/fa6";
import { Producto, useCarrito } from "../Context/CarritoContext";

const CarritoPage: React.FC = () => {
  const history = useHistory();
  const { carrito, removeFromCarrito, updateCantidad } = useCarrito();
  const [showRemoveToast, setShowRemoveToast] = useState(false);

  const handleRemove = (id: string) => {
    removeFromCarrito(id);
    setShowRemoveToast(true);
  };

  const handleIncrementQuantity = (id: string) => {
    const item = carrito.find((item) => item.id === id);
    if (item) {
      updateCantidad(id, (item.cantidad || 0) + 1);
    }
  };

  const handleDecrementQuantity = (id: string) => {
    const item = carrito.find((item) => item.id === id);
    if (item && (item.cantidad || 0) > 1) {
      updateCantidad(id, (item.cantidad || 0) - 1);
    }
  };

  return (
    <IonContent className="bg-white">
      <IonToast
        className="font-font-family-light text-[15px] leading-5"
        isOpen={showRemoveToast}
        onDidDismiss={() => setShowRemoveToast(false)}
        message="Producto eliminado del carrito"
        position="top"
        duration={2000}
      />
      <IonHeader className="ion-no-border">
        <IonToolbar className="bg-white flex justify-start items-center">
          <button onClick={() => history.goBack()} className="text-Cian_oscuro">
            <FaArrowLeft className="m-2" />
          </button>
          <IonTitle className="text-black font-font-family-bold text-[20px]">
            Carrito
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            carrito.map((producto: Producto) => (
              <div key={producto.id} className="carrito-item">
                <img src={producto.image} alt={producto.name} />
                <div>
                  <h2>{producto.name}</h2>
                  <p>Precio: {producto.price}</p>
                  <p>Cantidad: {producto.cantidad}</p>
                  <button onClick={() => handleRemove(producto.id)}>
                    Eliminar
                  </button>
                  <div>
                    <button
                      onClick={() => handleDecrementQuantity(producto.id)}
                      disabled={(producto.cantidad || 1) <= 1}
                    >
                      -
                    </button>
                    <span>{producto.cantidad}</span>
                    <button
                      onClick={() => handleIncrementQuantity(producto.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mb-16"></div>
      </IonContent>
    </IonContent>
  );
};

export default CarritoPage;
