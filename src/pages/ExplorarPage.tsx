import React from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import { trashBin, searchCircle } from "ionicons/icons";

import ofertaSuchi from "../img/SushiCategoria.png";
import ofertaPizza from "../img/PizzaCategoria_2.png";

const ExplorarPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonSearchbar
          class=""
          className="font-font-family-light font-medium leading-5 text-[12px]"
          showClearButton="always"
          clearIcon={trashBin}
          searchIcon={searchCircle}
          placeholder="Buscar Uber Eats"
        ></IonSearchbar>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div className="">
        <div className="mx-[10px] my-[10px]">
          <span className="font-font-family-light font-medium leading-6">
            Todas las Categorias
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
            <div>
              <img className="rounded-t-xl" src={ofertaSuchi} />
            </div>
            <div className="text-center font-font-family-light font-medium leading-5 my-3">
              Sushi
            </div>
          </div>
          <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
            <div className="x:w-[190px] x:h-[106px]">
              <img className="rounded-t-xl " src={ofertaSuchi} />
            </div>
            <div className="text-center font-font-family-light font-medium leading-5 my-3">
              Pizza
            </div>
          </div>
          <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
            <div>
              <img className="rounded-t-xl" src={ofertaSuchi} />
            </div>
            <div className="text-center font-font-family-light font-medium leading-5 my-3">
              Comida Rapida
            </div>
          </div>
          <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
            <div>
              <img className="rounded-t-xl" src={ofertaSuchi} />
            </div>
            <div className="text-center font-font-family-light font-medium leading-5 my-3">
              Hamburguesas
            </div>
          </div>
          <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
            <div>
              <img className="rounded-t-xl" src={ofertaSuchi} />
            </div>
            <div className="text-center font-font-family-light font-medium leading-5 my-3">
              Ultima oferta
            </div>
          </div>
          <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
            <div>
              <img className="rounded-t-xl" src={ofertaSuchi} />
            </div>
            <div className="text-center font-font-family-light font-medium leading-5 my-3">
              Express
            </div>
          </div>
          <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
            <div>
              <img className="rounded-t-xl" src={ofertaSuchi} />
            </div>
            <div className="text-center font-font-family-light font-medium leading-5 my-3">
              Reposteria
            </div>
          </div>
          <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
            <div>
              <img className="rounded-t-xl" src={ofertaSuchi} />
            </div>
            <div className="text-center font-font-family-light font-medium leading-5 my-3">
              China
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-[10px] my-[10px]">
            <span className="font-font-family-light font-medium leading-6">
              Categorias Principales
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
              <div>
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Sushi
              </div>
            </div>
            <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
              <div>
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Sushi
              </div>
            </div>
            <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
              <div>
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Sushi
              </div>
            </div>
            <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
              <div>
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Sushi
              </div>
            </div>
            <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
              <div>
                <img className="rounded-t-xl" src={ofertaSuchi} />
              </div>
              <div className="text-center font-font-family-light font-medium leading-5 my-3">
                Sushi
              </div>
            </div>
            <div className="flex flex-col border-Plata border-[0.5px] mx-2 rounded-xl">
              <div>
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

export default ExplorarPage;
