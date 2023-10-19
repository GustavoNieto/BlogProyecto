import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
//Las rutas estan en AnimatedRoutes.js
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import AnimatedRoutes from 'AnimatedRoutes'
//HELMET
import { Helmet, HelmetProvider } from 'react-helmet-async';


import store from './store';
import { Provider } from 'react-redux';
//Las rutas estan en AnimatedRoutes.js
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers';
import Blog from 'containers/pages/Blog';
import Contact from 'containers/pages/Contact';

function App() {
 
  return (
    <HelmetProvider>
      <Helmet>
        <title>MLTDUKE | Software Agency</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones, soporte tecnico de equipos de computo, diseños en 3D." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web, diseños en 3D' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="http://www.mltduke.com/" />
        <meta name="author" content='MLTDUKE' />
        <meta name="publisher" content='MLTDUKE' />

        {/* Social Media Tags */}
        <meta property="og:title" content='MLTDUKE | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones, soporte tecnico de equipos de computo, diseños en 3D.' />
        <meta property="og:url" content="http://www.mltduke.com/" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='MLTDUKE | Software Agency' />
        <meta
            name="twitter:description"
            content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones, soporte tecnico de equipos de computo, diseños en 3D.'
        />
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
        <Provider store={store}>
              <Router>
                <AnimatedRoutes/>
            </Router>
        </Provider>
    </HelmetProvider>
  );
}

export default App;
