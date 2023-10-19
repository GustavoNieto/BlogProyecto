import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

function Contact(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title>MLTDUKE | Contacto</title>
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
            <Navbar/>
                <div className="pt-28">
                    Contact
                </div>
            <Footer/>
        </Layout>
    )
}
export default Contact