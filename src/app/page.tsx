"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeBuy, setActiveBuy] = useState(1);

  return (
    <div className="bg-blue-700">
      {/* Barra de anuncio de envío gratis */}
      <div className="bg-blue-700 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <span className="font-medium">¡Envío gratis en compra de 3x2!</span>
        </div>
      </div>

    
<AnimatePresence >
  <motion.div 
   initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="box"
  >
      <section id='hero' className=" bg-blue-700   mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center">
          {/* Columna Izquierda - Imagen */}
          <div className="relative">
            {/* Badge 3x2 */}
            <div className="absolute -top-4 -left-4 z-10">
              <div className="bg-black text-white font-bold rounded-full h-24 w-24 md:w-32 md:h-32 flex flex-col items-center justify-center transform rotate-[-8deg]">
                <span className="text-4xl">3x2</span>
                <span className="text-sm">Lleva 3</span>
                <span className="text-sm">Paga 2</span>
              </div>
            </div>
             {/* Imagen Principal */}
             <div className="relative w-full h-full">
             <div className='bg-white rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
           
              <img 
                src="/fundahero.png"
                alt="Fundas personalizadas" 
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
            
            
          </div>

          {/* Columna Derecha - Información */}
          <div className="space-y-6">
           
            

            <h1 className="text-4xl text-white font-bold">Funda Personalizada Para Celular</h1>

            {/* Precios */}
            <div className="flex items-center gap-4">
              <span className="text-3xl text-white font-bold">$349.00</span>
              <span className="text-xl text-white line-through">$450.00</span>
              <span className="bg-black text-white px-3 py-1 rounded-md text-sm">AHORRA 25%</span>
            </div>

            

            {/* Opciones de Compra */}
            <div className="space-y-4">
              <div onClick={() => setActiveBuy(0)} className={`border cursor-pointer rounded-lg p-4 flex items-center justify-between bg-transparent ${activeBuy === 0 ? 'bg-white text-black' : 'text-white'}`}>
                <div>
                  <h3 className="font-semibold">Compra 1</h3>
                  <p className="">Precio normal</p>
                </div>
                <div className="text-right">
                  <p className="font-bold ">$349.00</p>
                  <p className="line-through">$600.00</p>
                </div>
              </div>

              <div onClick={()=>setActiveBuy(1)} className={`border rounded-lg cursor-pointer p-4 flex items-center justify-between  bg-transparent relative ${activeBuy === 1 ? 'bg-white text-black' : 'text-white'}`}>
                <div className="absolute -top-3 right-4 bg-black text-white text-xs px-2 py-1 rounded">
                  ¡TERMINA PRONTO!
                </div>
                <div>
                  <h3 className="font-semibold ">Compra 2 y obtén 1 gratis</h3>
                  <p className="">Diseña distintos modelos</p>
                </div>
                <div className="text-right">
                  <p className="font-bold ">$700.00</p>
                  <p className=" line-through">$1050.00</p>
                </div>
              </div>
               <Link href={activeBuy === 0 ? "https://buy.stripe.com/test_9AQ01VeWfb8V9XO6oo" : "https://buy.stripe.com/test_fZe7un7tNel71riaEF"}>
              <button className="w-full cursor-pointer bg-black text-white font-bold py-4 rounded-lg  transition-colors">
                Comprar mi funda
              </button>
              </Link>
            </div>

           

            {/* Garantía */}
            <p className="text-center text-white">
              Garantía 30 días | Devoluciones gratis | Pago seguro
            </p>

            {/* Reseñas */}
            <div className="border mb-5 rounded-lg p-4 bg-white">
              <div className="flex gap-4 items-start">
                
                <div>
                  <h4 className="font-bold text-black">Edgar almanza.</h4>
                  <div className="flex text-yellow-400 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600">Funda de excelente calidad, el diseño es muy bonito y el material es muy resistente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </motion.div>

      </AnimatePresence>

      {/* Sección de Características */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Características de Nuestras Fundas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Material Premium</h3>
              <p className="text-gray-600">Fabricadas con materiales de alta calidad que protegen tu dispositivo de golpes y rayones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Diseño Personalizado</h3>
              <p className="text-gray-600">Crea tu diseño único o elige entre nuestros modelos exclusivos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Recibe tu funda personalizada en tiempo récord, con envío gratis en compras mayores a $500.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className=" mb-4">
                 <img src='/edgaropinion.png' className='w-full rounded-md mb-4'></img>
                <div>
                  <h4 className="font-bold text-black">Edgar almanza.</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;La calidad de la funda superó mis expectativas. El diseño personalizado quedó exactamente como lo quería y la entrega fue muy rápida.&rdquo;</p>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className=" mb-4">
                 <img src='/reviews2.png' className='w-full rounded-md mb-4'></img>
             <div>
                  <h4 className="font-bold text-black">Ana L.</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;Excelente servicio al cliente. Me ayudaron a elegir el mejor diseño y el resultado fue espectacular. La funda protege muy bien mi teléfono.&rdquo;</p>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className=" mb-4">
              
                 <div className="relative w-full" style={{ paddingTop: '150.25%' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1079648337?h=f1cf8009aa"
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <h4 className="font-bold text-black">Ibeth Trinidad.</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;Compré la funda personalizada y quedé encantado. Las fundas son de excelente calidad y el precio es muy competitivo.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para personalizar tu funda?</h2>
          <p className="text-xl mb-8">Únete a miles de clientes satisfechos y protege tu dispositivo con estilo</p>
          <a href="#hero"  className="bg-[#FFB800] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFA500] transition-colors text-lg">
            Comenzar mi diseño
          </a>
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a 
       href="https://wa.me/526241751735?text=¡Hola!%20Me%20gustaría%20comprar%20una%20funda"  
       target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg 
          className="w-8 h-8" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Fundas Personalizadas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
