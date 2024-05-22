import React from "react";
import {
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";

import { RiNotification3Line } from "react-icons/ri";
import { searchCircle, trashBin } from "ionicons/icons";

const CuentaPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Cuenta</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        Cuenta
      </div>
    </IonContent>
  </>
);

export default CuentaPage;
