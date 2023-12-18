import React from 'react'
import Formulario from './Formulario'
import useCotizador from '../hooks/useCotizador'
import Spinner from './Spinner'




export default function 
() {
  const {resultado , cargando} = useCotizador()
  return (
    <>
        <header className='my-10'>
            <h1 className='text-center text-6xl font-black text-white'> Cotizador de seguros de auto</h1>
        </header>
        <main className='bg-white md:w-2/3 lg:w-2/4 shadow rounded-lg p-10 mx-auto'>
            <Formulario />
            {cargando  ? <Spinner /> : <div className='text-center  shadow-transparent mb-3 mt-3 text-black hover:bg-slate-600 bg-white p-3'>{resultado }</div> }
        </main>
    </>
  )
}
