import React from 'react';
import {
    IonItem,
    IonLabel,
    IonNote
}
    from
 '@ionic/react';


interface Props {
    name: string,
    amount: string
}


const Category: React.FC<Props> = (info : Props) => (
        <IonItem>
            <IonLabel>{info.name}</IonLabel>
            <IonNote slot="end" color="danger">{info.amount}</IonNote>
        </IonItem>
)
export default Category;