//Componente de typewriter que esto sirve para la pagina de inicio tengo movimiento las letras(Se_sobre_Escribe)
//TODO ESTE CODIGO ES EL CONTENIDO DE HOME
import { Typewriter } from 'react-simple-typewriter'
//Link
import { Link } from 'react-router-dom'

function Header(){
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-24 xl:pb-36 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                  Programando  <span> </span>
                    <Typewriter
                        words={['para ti']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        //onLoopDone={handleDone}
                        //onType={handleType}
                    />
                </h1>
                <ul className='flex gap-8'>
                    <li className='inline-flex transition duration-300 ease-in-out border-b-2 border-underline hover:border-orange-button'>
                        <Link to='/servicios/algoAqui' className='mt-6 text-2xl font-medium leading-8 text-gray-900 sm:text-center'> 
                            Aplicaciones Escritorio
                        </Link>                       
                    </li>
                    <li className='inline-flex transition duration-300 ease-in-out border-b-2 border-underline hover:border-orange-button'>
                        <Link to='/servicios/algoAqui' className='mt-6 text-2xl font-medium leading-8 text-gray-900 sm:text-center'> 
                            Web
                        </Link>
                    </li>
                    <li className='inline-flex transition duration-300 ease-in-out border-b-2 border-underline hover:border-orange-button'>
                        <Link to='/servicios/algoAqui' className='mt-6 text-2xl font-medium leading-8 text-gray-900 sm:text-center'> 
                            Marketing
                        </Link>
                    </li>
                    <li className='inline-flex transition duration-300 ease-in-out border-b-2 border-underline hover:border-orange-button'>
                        <Link to='/servicios/algoAqui' className='mt-6 text-2xl font-medium leading-8 text-gray-900 sm:text-center'> 
                            Soporte Técnico computadoras
                        </Link>
                    </li>
                    <li className='inline-flex transition duration-300 ease-in-out border-b-2 border-underline hover:border-orange-button'>
                        <Link to='/servicios/algoAqui' className='mt-6 text-lg font-medium leading-8 text-gray-900 sm:text-center'> 
                            Consultorias
                        </Link>
                    </li>
                </ul>        
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-40rem)] sm:top-[calc(100%-30rem)]">
                <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header


