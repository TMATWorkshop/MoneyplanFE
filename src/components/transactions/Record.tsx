import React from 'react';
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonCardContent, IonButton, IonSelect, IonSelectOption, IonInput, IonItem, IonLabel, IonContent } from '@ionic/react';

const Record: React.FC = () => (
    <IonContent>
      <IonCard>

      <IonCardHeader>
        <IonCardTitle>Transaction</IonCardTitle>
        <IonCardSubtitle>
          Entry
        </IonCardSubtitle>
      </IonCardHeader>

        <IonCardContent>
          <IonItem>
          <IonLabel position="stacked">Category</IonLabel>
          <IonSelect placeholder="Category" interface="popover">
              <IonSelectOption value="Rent">Rent</IonSelectOption>
              <IonSelectOption value="Grocery">Grocery</IonSelectOption>
              <IonSelectOption value="Baby Funds">Baby Funds</IonSelectOption>
              <IonSelectOption value="Insurance">Insurance</IonSelectOption>
              <IonSelectOption value="Utilities">Utilities</IonSelectOption>
              <IonSelectOption value="Allowance">Allowance</IonSelectOption>
              <IonSelectOption value="Rolling Funds">Rolling Funds</IonSelectOption>
              <IonSelectOption value="Mobile">Mobile</IonSelectOption>
            </IonSelect>
        </IonItem>
          <IonItem>
            <IonLabel position="stacked">Description</IonLabel>
            <IonInput required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Amount</IonLabel>
            <IonInput type="number" placeholder="0.0" required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Reimbursable To</IonLabel>
            <IonSelect placeholder="" interface="popover">
                <IonSelectOption value="Outgoing">Outgoing</IonSelectOption>
                <IonSelectOption value="Alvin">Alvin</IonSelectOption>
                <IonSelectOption value="Nesty">Nesty</IonSelectOption>
              </IonSelect>
          </IonItem>
          <br/>
          <IonButton color="primary" expand="block">Record</IonButton>
        </IonCardContent>
      </IonCard>
      
    </IonContent>
  );

  export default Record;