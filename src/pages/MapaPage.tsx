import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonSearchbar,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import Mapa from "../API/Mapa";
import { RiNotification3Line } from "react-icons/ri";
import { searchCircle, searchCircleOutline, trashBin } from "ionicons/icons";

import Interruptor from "../components/Interruntor";

const MapaPage: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar>
          <div className="flex ">
            <div className="ml-4 mr-3">
              <span className=" font-font-family-light font-medium leading-5 g:text-[12px] ">
                Entregar ahora
              </span>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px]">
                Direccion: *****
              </div>
            </div>
            <div className="flex flex-auto items-center justify-end">
              <nav className="flex items-center gap-x-4">
                <button className="relative bg-Gris_muy_claro py-2 px-2 rounded-full ">
                  <RiNotification3Line className="text-black" />
                  <span
                    hidden
                    className="absolute -top-1 -right-1 bg-Cian_oscuro py-1 px-[6px] rounded-full box-content text-[9px] font-bold text-white"
                  ></span>
                </button>
                <div className="mr-2">
                  <Interruptor />
                </div>
              </nav>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <Mapa />
        </div>
      </IonContent>
    </>
  );
};

export default MapaPage;
