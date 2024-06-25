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
import { FaCircle, FaReceipt } from "react-icons/fa";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useCarrito, Producto } from "../Context/CarritoContext";
import GifCarrito from "../img/IconGif/tienda-de-comestibles.gif";
import CustomActionSheet from "../components/CustomActionSheetProps";

const CarritoPage: React.FC = () => {
  const { carrito, removeFromCarrito, updateCantidad } = useCarrito();
  const [isOpen, setIsOpen] = useState(false);
  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const [toastAnimation, setToastAnimation] = useState("toast-slide-in");
  const history = useHistory();

  const handlePedidos = () => {
    history.push("/pedidos");
  };

  const handleHome = () => {
    history.push("/home");
  };

  const handleActionClick = (action: string, productId: number) => {
    if (action === "removeProduct") {
      removeFromCarrito(productId);
      setToastAnimation("toast-slide-in");
      setShowRemoveToast(true);
      setTimeout(() => {
        setToastAnimation("toast-slide-out");
      }, 2000);
    }
    setIsOpen(false);
  };

  const handleRemove = (productId: number) => {
    removeFromCarrito(productId);
  };

  const handleIncrement = (productId: number) => {
    const producto = carrito.find((p) => p.id === productId);
    if (producto && producto.cantidad) {
      updateCantidad(productId, producto.cantidad + 1);
    }
  };

  const handleDecrement = (productId: number) => {
    const producto = carrito.find((p) => p.id === productId);
    if (producto && producto.cantidad) {
      updateCantidad(productId, producto.cantidad - 1);
    }
  };

  return (
    <>
      <IonToast
        className={`font-font-family-light text-[15px] leading-5 ${toastAnimation}`}
        isOpen={showRemoveToast}
        onDidDismiss={() => setShowRemoveToast(false)}
        position="top"
        color="danger"
        message="Producto removido"
        duration={2000}
      />
      <IonHeader class="shadow-none">
        <IonToolbar>
          <div className="flex items-center gap-x-[234px] mt-1.5 mb-2">
            <button
              className="mx-5  rounded-full bg-opacity-50 active:bg-Gris_muy_claro"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft className="text-Negro text-[20px]" />
            </button>

            <button
              onClick={handlePedidos}
              className="flex bg-Gris_muy_claro text-[13px] font-bold px-2 py-2 rounded-xl"
            >
              <FaReceipt className="mr-1.5" />
              Pedidos
            </button>
          </div>
          <IonTitle className="font-font-family-light text-[28px]">
            Carritos
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {carrito.length > 0 ? (
          <>
            <ul>
              {carrito.map((producto) => (
                <li key={producto.id}>
                  <div className="px-3 py-3 mx-3 border border-Gris_muy_claro rounded-xl">
                    <div className="flex">
                      <img
                        src={producto.image}
                        alt={producto.name}
                        className="h-[60px] w-[60px] rounded-full"
                      />
                      <div className="flex flex-col font-font-family-light pl-3 w-full">
                        <div className="flex items-center font-semibold text-[16px] gap-x-[120px]">
                          {producto.name}
                          <button onClick={() => setIsOpen(true)}>
                            <HiMiniEllipsisHorizontal className="text-Gris_paloma text-[22px]" />
                          </button>
                        </div>
                        <div className="flex items-center text-[13px] font-light">
                          <button
                            className="text-[20px] mx-1.5"
                            onClick={() => handleDecrement(producto.id)}
                          >
                            -
                          </button>
                          <span>{producto.cantidad}</span>
                          <button
                            className="text-[20px] mx-1.5"
                            onClick={() => handleIncrement(producto.id)}
                          >
                            +
                          </button>
                          <FaCircle className="mx-[3px] text-[2.5px]" />
                          Cantidad de Artículos
                        </div>
                        <div className="text-[13px] font-light">Dirección</div>
                      </div>
                    </div>
                    <div className="flex flex-col pt-2 font-font-family-light">
                      <CustomActionSheet
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        actions={[
                          {
                            content: (
                              <div className="flex items-center">
                                <MdDelete className="mx-2 mr-4 text-[24px] text-Rojo_claro" />
                                <button
                                  onClick={() =>
                                    handleActionClick(
                                      "removeProduct",
                                      producto.id
                                    )
                                  }
                                  className="font-medium text-Rojo_claro"
                                >
                                  Eliminar producto
                                </button>
                              </div>
                            ),
                            onClick: function (): void {
                              throw new Error("Function not implemented.");
                            },
                          },
                        ]}
                      />
                      <button className="bg-Negro text-Blanco text-[15px] font-semibold py-2.5 rounded-lg">
                        Ver el carrito
                      </button>
                      <button className="bg-Gris_muy_claro text-[15px] font-semibold mt-2 py-2.5 rounded-lg">
                        Ver la Tienda
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg">
              <button
                onClick={handlePedidos}
                className="w-full bg-Negro text-Blanco text-[15px] font-semibold py-2.5 rounded-lg"
              >
                Continuar
              </button>
            </div>
          </>
        ) : (
          <div className="mx-4 my-4">
            <div className="flex flex-col items-center justify-center">
              <img className="h-[180px] w-[200px]" src={GifCarrito} />
              <div className="flex flex-col font-font-family-light text-center text-[17px] font-semibold leading-6 px-5">
                <div>
                  Agregar Artículos para comenzar a
                  <span> llenar un Carrito</span>
                </div>
                <div className="flex flex-col text-[12px] font-light pt-2">
                  Cuando agregues artículos de un restaurante o
                  <span>Negocios, tu carrito aparecerá aquí</span>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleHome}
                    className="bg-Negro text-Blanco text-[13px] font-bold px-2 py-2.5 rounded-2xl"
                  >
                    Comprar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </IonContent>
    </>
  );
};

export default CarritoPage;
