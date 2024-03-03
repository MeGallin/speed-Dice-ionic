import Footer from './common/Footer.tsx';
import Header from './common/Header.tsx';
import HomeView from './views/HomeView.tsx';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {
  return (
    <div
      style={{
        margin: '0 1rem 0 1rem',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      <Header />
      <HomeView />
      <Footer />
    </div>
  );
}

export default App;
