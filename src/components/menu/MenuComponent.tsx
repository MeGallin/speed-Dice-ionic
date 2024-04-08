import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { Link } from '@tanstack/react-router';
import useFromNow from '../../hooks/useFromNow';

const MenuComponent = () => {
  const timeFromNow = useFromNow();
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div>
            <Link to="/" activeProps={{ className: 'active' }}>
              Home
            </Link>{' '}
            <Link to="/dice" activeProps={{ className: 'active' }}>
              Dice header
            </Link>
          </div>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Optional logo{timeFromNow}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </>
  );
};

export default MenuComponent;
