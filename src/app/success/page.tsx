"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck } from "react-icons/fa";

export default function Success() {
  return (
    <div className="min-h-screen bg-blue-700 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 max-w-2xl w-full shadow-2xl"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
           <FaCheck className='text-white text-4xl'/>
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">¡Gracias por tu compra!</h1>
          <p className="text-gray-600">Sigue estos pasos para completar tu pedido</p>
        </div>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Envía tu diseño</h3>
              <p className="text-gray-600">Comparte el diseño que elegiste a través de WhatsApp</p>
              <a 
                href="https://wa.me/526241751735?text=¡Hola!%20Acabo%20de%20comprar%20mi%20funda%20personalizada%20y%20quiero%20enviarte%20el%20diseño%20que%20elegí.%20¿Podrías%20ayudarme%20con%20el%20siguiente%20paso?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar por WhatsApp
              </a>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Fabricación de tu funda</h3>
              <p className="text-gray-600">Una vez que recibamos tu diseño, procederemos a fabricar tu funda personalizada</p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Envío de tu pedido</h3>
              <p className="text-gray-600">Te enviaremos tu funda personalizada a la dirección proporcionada</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">¿Tienes alguna duda? Contáctanos</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            Volver al inicio
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
