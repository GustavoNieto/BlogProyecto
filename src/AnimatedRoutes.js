import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers';
import Blog from 'containers/pages/Blog';
import Contact from 'containers/pages/Contact';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes(){
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                  {/* Error Cuando no hay ruta definida*/}
                  <Route path='*' element={<Error404 />} />
                  {/* Home*/}
                  <Route path='/' element={<Home />} />
                  {/* Casos*/}
                  <Route path='/casos' element={<Cases />} />
                  {/* Servicios*/}
                  <Route path='/servicios' element={<Services />} />
                  {/* Nosotros*/}
                  <Route path='/nosotros' element={<About />} />
                  {/* Carreras*/}
                  <Route path='/carreras' element={<Careers />} />
                  {/* Blog*/}
                  <Route path='/blog' element={<Blog />} />
                  {/* Contacto*/}
                  <Route path='/contacto' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes