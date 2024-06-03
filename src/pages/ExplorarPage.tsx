import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonSearchbar,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import { trashBin, searchCircle, searchCircleOutline } from "ionicons/icons";

import ofertaSuchi from "../img/SushiCategoria.png";
import ofertaPizza from "../img/PizzaCategoria_2.png";

const ExplorarPage: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar className="flex flex-col items-center justify-center px-2">
          <div className="w-full">
            <IonIcon
              hidden
              icon={searchCircleOutline}
              className="absolute right top-4 justify-center text-Gris_paloma text-2xl"
            />
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Buscar Uber Eats"
              className="w-full px-4 py-2 border-none bg-Mercurio   placeholder:text-Gris_paloma placeholder:font-font-family-light placeholder:font-normal placeholder:text-[15px] text-Negro font-font-family-light font-normal text-[15px] rounded-2xl shadow-sm focus:outline-none focus:ring-0 "
            />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="">
          <div className="mx-4 my-4">
            <span className="font-font-family-light font-medium leading-6">
              Todas las Categorias
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] mb-5 mx-4">
            <div className="flex flex-col border-Gris_muy_claro border-[0.5px] rounded-xl">
              <div className="max-w-[189px] max-h-[105px]">
                <img className="rounded-t-xl " src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Sushi
              </div>
            </div>
            <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
              <div className="max-w-[189px]">
                <img
                  className="rounded-t-xl h-[105.55px] w-full object-cover "
                  src={ofertaPizza}
                />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Pizza
              </div>
            </div>
            <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
              <div className="max-w-[189px] max-h-[105px]">
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Comida Rapida
              </div>
            </div>
            <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
              <div className="max-w-[189px] max-h-[105px]">
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Hamburguesas
              </div>
            </div>
            <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
              <div className="max-w-[189px] max-h-[105px]">
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Ultima oferta
              </div>
            </div>
            <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
              <div className="max-w-[189px] max-h-[105px]">
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Express
              </div>
            </div>
            <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
              <div className="max-w-[189px] max-h-[105px]">
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Reposteria
              </div>
            </div>
            <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
              <div className="max-w-[189px] max-h-[105px]">
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                China
              </div>
            </div>
          </div>
          <div className="mx-4">
            <div className="mx-[10px] my-[10px]">
              <span className="font-font-family-light font-medium leading-6">
                Categorias Principales
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-20">
              <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
                <div className="max-w-[189px] max-h-[105px]">
                  <img className="rounded-t-xl" src={ofertaSuchi} />
                </div>
                <div className="text-center font-font-family-light font-medium leading-5 my-3">
                  Sushi
                </div>
              </div>
              <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
                <div className="max-w-[189px] max-h-[105px]">
                  <img className="rounded-t-xl" src={ofertaSuchi} />
                </div>
                <div className="text-center font-font-family-light font-medium leading-5 my-3">
                  Sushi
                </div>
              </div>
              <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
                <div className="max-w-[189px] max-h-[105px]">
                  <img className="rounded-t-xl" src={ofertaSuchi} />
                </div>
                <div className="text-center font-font-family-light font-medium leading-5 my-3">
                  Sushi
                </div>
              </div>
              <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
                <div className="max-w-[189px] max-h-[105px]">
                  <img className="rounded-t-xl" src={ofertaSuchi} />
                </div>
                <div className="text-center font-font-family-light font-medium leading-5 my-3">
                  Sushi
                </div>
              </div>
              <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
                <div className="max-w-[189px] max-h-[105px]">
                  <img className="rounded-t-xl" src={ofertaSuchi} />
                </div>
                <div className="text-center font-font-family-light font-medium leading-5 my-3">
                  Sushi
                </div>
              </div>
              <div className="flex flex-col border-Gris_muy_claro border-[0.5px]  rounded-xl">
                <div className="max-w-[189px] max-h-[105px]">
                  <img className="rounded-t-xl" src={ofertaSuchi} />
                </div>
                <div className="text-center font-font-family-light font-medium leading-5 my-3">
                  Sushi
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default ExplorarPage;
