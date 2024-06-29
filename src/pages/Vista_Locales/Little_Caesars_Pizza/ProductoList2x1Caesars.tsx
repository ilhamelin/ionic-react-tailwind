import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { getProductCaesarsFromFirestore } from "../../../firebase/firebase-functions";
import { IonToast } from "@ionic/react";
import { IoTrophyOutline } from "react-icons/io5";
import { auth } from "../../../firebase/firebase-config";
import { FaCircle } from "react-icons/fa";

const ProductosList2x1KFC = ({ idProducto }: { idProducto: string }) => {
  const [productData, setProductData] = useState<any>(null);
  const [showAddToast, setShowAddToast] = useState(false);
  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const [toastAnimation, setToastAnimation] = useState("toast-slide-in");

  useEffect(() => {
    const fetchProductoData = async () => {
      try {
        const data = await getProductCaesarsFromFirestore(idProducto);
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductoData();
  }, [idProducto]);

  if (!productData) {
    return null; // Si no hay datos del producto, retorna null o un spinner de carga
  }

  if (!productData) {
    return <div></div>;
  }

  return (
    <div>
      <IonToast
        className={`font-font-family-light text-[15px] leading-5 ${toastAnimation}`}
        isOpen={showAddToast}
        onDidDismiss={() => setShowAddToast(false)}
        message="Tienda agregada"
        position="top"
        duration={2000}
      />
      <IonToast
        className={`font-font-family-light text-[15px] leading-5 ${toastAnimation}`}
        isOpen={showRemoveToast}
        onDidDismiss={() => setShowRemoveToast(false)}
        message="Tienda eliminada"
        position="top"
        duration={2000}
      />

      <div className=" mb-4 mt-3">
        <div className="flex justify-end font-font-family-light">
          <div className="flex-1 flex-col justify-start pr-5">
            <div className="leading-5 mb-1">
              <div className="text-[16px] font-semibold">
                {productData.nombre}
              </div>
            </div>
            <div className="flex items-center font-light">
              <div className="text-[14px]">CLP {productData.precio}</div>
              <FaCircle className="mx-[4px] text-[2.7px] " />
              <div className="text-[14px] mr-[4px]">
                {productData.popularidad}
              </div>
              <span className="text-[14px]">
                ({productData.cantidadReview})
              </span>
            </div>
            <div className="text-[12px] font-extralight text-Gris_paloma">
              {productData.ingredientes}
            </div>
            <div className="text-[12px] font-normal text-Cian_oscuro">
              Compra 1, llevate 1 extra.
            </div>
          </div>
          <div className="order-last">
            <img
              className="object-cover h-[100px] w-[115px] rounded-lg "
              src={productData.imagenUrl}
              alt={`${productData.nombre} image`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosList2x1KFC;
