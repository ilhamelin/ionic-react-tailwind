import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const CarritoPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Carrito</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Carrito
      </div>
    </IonContent>
  </>
);

export default CarritoPage;