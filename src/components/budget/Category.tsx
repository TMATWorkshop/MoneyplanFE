import React from 'react';
import {
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonLabel,
    IonNote
}
    from
 '@ionic/react';
 import { RouteComponentProps } from 'react-router';


interface Props extends RouteComponentProps<{}> {
    name: string,
    amount: string
}

const Category: React.FC<Props> = (info : Props) => (
    <IonItemSliding>
        <IonItem>
            <IonLabel>{info.name}</IonLabel>
            <IonNote slot="end" color="danger">{info.amount}</IonNote>
        </IonItem>
        <IonItemOptions side="end">
            <IonItemOption onClick={(e) => (
                    info.history.push('./recordTransaction')
                 )} >
                <IonLabel>Add Transaction</IonLabel>
            </IonItemOption>
        </IonItemOptions>
    </IonItemSliding>
);

export default Category;