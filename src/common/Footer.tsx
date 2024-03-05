import { IonFooter, IonToolbar, IonTitle } from '@ionic/react';
import DateTime from '../components/dateTime/DateTime';

const Footer = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle size="small" class="ion-text-center">
          <DateTime />
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
