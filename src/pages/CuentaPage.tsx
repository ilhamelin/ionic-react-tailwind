import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Cuenta
      </div>
    </IonContent>
  </>
);

export default CuentaPage;