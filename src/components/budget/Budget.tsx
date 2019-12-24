import React from 'react';
import {
    IonContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonIcon, 
    IonFab,
    IonFabButton,
    IonFabList,
    IonButton
}
    from '@ionic/react';
import Category from "./Category";

const Budget: React.FC = () => (
        <IonContent fullscreen class="ion-padding">
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
                <IonFabButton>
                    <IonIcon name="add"></IonIcon>
                </IonFabButton>
                <IonFabList side="start">
                    <IonButton type="button" href="/recordTransaction" routerDirection="forward">
                        Transaction
                    </IonButton>
                    <IonButton type="button" href="/categoryDetail" routerDirection="forward">
                        Category
                    </IonButton>
                </IonFabList>
            </IonFab>
            <IonList>
                <IonListHeader>
                    <IonLabel>Categories</IonLabel>                    
                </IonListHeader>
                <Category name="Rent" amount="2000"></Category>
                <Category name="Internet" amount="104.93"></Category>
                <Category name="Condo Payment" amount="950"></Category>
                <Category name="Mobile" amount="125.5"></Category>
                <Category name="Insurance" amount="653.88"></Category>
                <Category name="Insurance Endowment" amount="300"></Category>
                <Category name="Domestic" amount="600"></Category>
                <Category name="Domestic Levy" amount="300"></Category>
                <Category name="PH Tax" amount="35"></Category>
            </IonList>
        </IonContent>
);

export default Budget;
