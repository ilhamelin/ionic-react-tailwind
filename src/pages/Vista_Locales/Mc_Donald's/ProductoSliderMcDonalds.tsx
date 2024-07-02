import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { getProductMcDonaldsFromFirestore } from "../../../firebase/firebase-functions";
import { IonToast } from "@ionic/react";
import { IoTrophyOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

const ProductosSliderMcDonalds = ({
  idProducto,
  idTienda,
  userId,
}: {
  idProducto: string;
  idTienda: string;
  userId: string;
}) => {
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAddToast, setShowAddToast] = useState(false);
  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const [toastAnimation, setToastAnimation] = useState("toast-slide-in");
  const [showCounter, setShowCounter] = useState(false);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad


  useEffect(() => {
    const fetchProductoData = async () => {
      try {
        const data = await getProductMcDonaldsFromFirestore(idProducto);
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductoData();
  }, [idProducto]);


  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return <div>Cargando...</div>; // Puedes reemplazar esto con un spinner de carga si lo prefieres
  }

  if (!productData) {
    return <div>Error al cargar los datos del producto</div>; // Mensaje de error en caso de que no se carguen los datos
  }

  return (
    <div>
      <IonToast
        className={`font-font-family-light text-[15px] leading-5 ${toastAnimation}`}
        isOpen={showAddToast}
        onDidDismiss={() => setShowAddToast(false)}
        message="Producto agregado al carrito"
        position="top"
        duration={2000}
      />
      <IonToast
        className={`font-font-family-light text-[15px] leading-5 ${toastAnimation}`}
        isOpen={showRemoveToast}
        onDidDismiss={() => setShowRemoveToast(false)}
        message="Producto eliminado del carrito"
        position="top"
        duration={2000}
      />

      <Swiper
        slidesPerView={1.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="ml-4 mr-1 font-font-family-light">
          <div className="flex justify-center">
            <img
              className="rounded-xl object-cover h-[130px] w-full shadow-md"
              src={productData.imagenUrl}
              alt={`${productData.nombre} image`}
            />
            <div className="flex absolute ">
              <div className="flex  mt-1 ml-[2px] rounded-md px-1 text-[11px] items-center bg-Cian_oscuro text-Blanco">
                <IoTrophyOutline className="mx-[1px] " />
                Ahorros exclusivos
              </div>
              <div className="flex absolute -bottom-[110px] -right-[2px] font-font-family-light">
                <div className="flex justify-end items-center ">
                  {showCounter && (
                    <div className="flex items-center mr-2 bg-Gris_muy_claro px-1 rounded-md">
                      <button
                        className="text-[15px] mx-1"
                        onClick={handleDecrementQuantity}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-1">{quantity}</span>
                      <button
                        className="text-[15px] mx-1"
                        onClick={handleIncrementQuantity}
                      >
                        +
                      </button>
                    </div>
                  )}
                  <div className="my-1">
                    <button
                      className="text-[12px] bg-Gris_muy_claro shadow-md rounded-full py-1 px-1"
              
                    >
                      <AiOutlinePlus className="text-[15px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 ">
            <div className="flex flex-col">
              <div className="text-[15px] font-semibold ">
                {productData.nombre}
              </div>
              <div className="flex items-center font-light">
                <div className="text-[13px] ">CLP {productData.precio}</div>
                <FaCircle className="mx-[4px] text-[2.7px] " />
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductosSliderMcDonalds;
