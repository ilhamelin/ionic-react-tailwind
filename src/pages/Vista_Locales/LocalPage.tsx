import React from "react";
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router-dom";



const LocalPage: React.FC = () => {


  // Aquí puedes utilizar ofertaId para cargar la información de la oferta seleccionada

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>Información de la oferta con ID: </div>
      </IonContent>
    </>
  );
};

export default LocalPage;
