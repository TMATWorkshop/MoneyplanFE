import React from "react";
import {
  IonSelect,
  IonSelectOption,
  IonInput,
  IonItem,
  IonLabel,
  IonContent
} from "@ionic/react";

const Record: React.FC = () => (
  <IonContent>
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
      <IonInput required />
    </IonItem>
    <IonItem>
      <IonLabel position="stacked">Amount</IonLabel>
      <IonInput type="number" placeholder="0.0" required />
    </IonItem>
  </IonContent>
);

export default Record;
