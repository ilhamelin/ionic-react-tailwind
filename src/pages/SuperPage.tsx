import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const SuperPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Super</IonTitle>
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
        Super
      </div>
    </IonContent>
  </>
);

export default SuperPage;
