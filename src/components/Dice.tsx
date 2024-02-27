import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

const Dice = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Speed Dice</IonCardTitle>
          <IonCardSubtitle>Upto 6 times quicker</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>DICE to follow</IonCardContent>
      </IonCard>
    </div>
  );
};

export default Dice;
