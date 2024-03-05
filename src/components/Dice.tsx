import { useDiceRoller } from '../hooks/useDiceRoller';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonIcon,
  IonImg,
  IonAlert,
} from '@ionic/react';
import './Dice.css';
import { arrowForwardOutline } from 'ionicons/icons';
import useFromNow from '../hooks/useFromNow';

useDiceRoller;

const Dice = () => {
  const timeFromNow = useFromNow();
  const { values, spin, message, spinCount, totals } = useDiceRoller();
  // Define an array of animation classes
  const animations = [
    'bounce',
    'rotateIn',
    'bounceInRight',
    'fadeInLeftBig',
    'bounceInUp',
    'fadeIn',
  ];
  return (
    <div>
      <IonCard>
        <IonCardHeader>
          <div className="dice-wrapper">
            {values.map((value, index) => (
              <span key={index}>
                {value && (
                  <IonImg
                    src={`../assets/${value}.png`}
                    className={`animate__animated animate__${
                      animations[value - 1]
                    }`}
                  ></IonImg>
                )}
              </span>
            ))}
          </div>
          <IonCardSubtitle>Up to 6 times quicker {timeFromNow}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <div>{message}</div>
          <div>
            Please move forward by {totals[totals.length - 1] || 0} spaces
          </div>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardContent>
          <IonButton
            expand="full"
            onClick={spin}
            slot="start"
            fill="outline"
            size="large"
          >
            Spin The Dice <IonIcon icon={arrowForwardOutline}></IonIcon>
          </IonButton>
          <div>Spin Count: {spinCount}</div>{' '}
          {/* Display the number of times spin was called */}
        </IonCardContent>
      </IonCard>

      <IonButton id="present-alert">Show Spin Stats</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Stats"
        subHeader="All the spins for this session"
        message={totals
          .map((total, index) => `S{${index + 1}}=${total}`)
          .join(', ')}
        buttons={['Close']}
      ></IonAlert>

      
    </div>
  );
};

export default Dice;
