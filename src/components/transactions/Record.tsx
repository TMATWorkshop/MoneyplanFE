import React from 'react';
import { IonInput, IonItem, IonLabel, IonContent } from '@ionic/react';

const Record: React.FC = () => (
    <IonContent>
      <IonItem>
        <IonLabel position="stacked">Description</IonLabel>
        <IonInput></IonInput>
      </IonItem>
    </IonContent>
  );

  export default Record;