import React from 'react';
import {
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonCardContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonContent
}
  from '@ionic/react';

  const CategoryDetail: React.FC = () => (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Category</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <form>
            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput required></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Amount</IonLabel>
              <IonInput type="number" placeholder="0.0" required></IonInput>
            </IonItem>
            <br />
            <IonButton color="primary" type="submit" expand="block">Save</IonButton>
            <IonButton color="danger" type="button" expand="block" routerLink="/budget" routerDirection="back">Cancel</IonButton>
          </form>
        </IonCardContent>
      </IonCard>
    </IonContent>
  )

  export default CategoryDetail;