import { useDiceRoller } from '../hooks/useDiceRoller';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonImg,
  IonAlert,
  IonItem,
  IonChip,
  IonText,
} from '@ionic/react';
import './Dice.css';
import { arrowForwardOutline } from 'ionicons/icons';

useDiceRoller;

const Dice = () => {
  const { values, spin, message, spinCount, totals } = useDiceRoller();

  console.log(totals);

  // Define an array of animation classes
  const animations = [
    'bounce',
    'rotateIn',
    'bounceInRight',
    'fadeInLeftBig',
    'bounceInLeft',
    'fadeIn',
  ];

  return (
    <div className="wrapper">
      <IonCard>
        {totals.length === 0 ? null : (
          <IonCardHeader>
            <IonCardContent>
              <>
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
              </>
            </IonCardContent>
          </IonCardHeader>
        )}
      </IonCard>
      {totals.length === 0 ? null : (
        <>
          <IonCard>
            <IonCardHeader>
              <div className="dice-wrapper">
                {values.map((value, index) => (
                  <span key={index}>
                    {value && (
                      <IonItem>
                        <IonImg
                          src={`../assets/${value}.png`}
                          className={`animate__animated animate__${
                            animations[value - 1]
                          }`}
                        ></IonImg>
                      </IonItem>
                    )}
                  </span>
                ))}
              </div>
            </IonCardHeader>
          </IonCard>

          <IonCard>
            <IonCardContent>
              <IonText color="primary">
                <h1>
                  ...move <span>{totals[totals.length - 1] || 0}</span>{' '}
                  spaces...
                </h1>
              </IonText>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent>
              <IonText color="danger ">
                {message.split(',').map((part, index) => (
                  <h2 key={index}>
                    {index === 0 ? <span>{part}</span> : <span> {part}</span>}
                  </h2>
                ))}
              </IonText>
            </IonCardContent>
          </IonCard>
        </>
      )}

      <IonChip outline={true} color="light">
        Spin Counter: {spinCount}
      </IonChip>
      <IonButton
        expand="block"
        onClick={spin}
        slot="start"
        fill="outline"
        size="large"
      >
        Spin The Dice <IonIcon icon={arrowForwardOutline}></IonIcon>
      </IonButton>
    </div>
  );
};

export default Dice;
