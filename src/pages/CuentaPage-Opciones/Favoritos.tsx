import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Favoritos: React.FC = () => {
  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar>
          <button
            className=" px-[10px] py-[10px] rounded-full bg-opacity-50 active:bg-Gris_muy_claro"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft className="text-Negro text-[25px]" />
          </button>
          <IonTitle className="font-font-family-light text-[28px]">
            Favoritos
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </>
  );
};

export default Favoritos;
