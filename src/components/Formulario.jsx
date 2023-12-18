import React, { Fragment, useContext } from "react";
import { MARCAS, PLANES, YEARS } from "../constants/index";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";


export default function Formulario() {
  const { handleChangeDatos , datos , error , seterror , cotizarSeguro } = useCotizador();

  const handleSubmit = e => {
    e.preventDefault()
    if(Object.values(datos).includes('')) {
        seterror('Todos los campos son obligatorios')
        return
    }
    seterror('')

    //TODO COTIZAR
    cotizarSeguro()
  }
  return (
    <>
    {error && <Error />}
      <form 
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
          value={datos.marca}
            onChange={(e) => handleChangeDatos(e)} 
            className="w-full p-3  bg-white border-gray-200"
            name="marca"
            id=""
          >
            <option value="">--Seleciona Marca--</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
          value={datos.year}
        onChange={(e) => handleChangeDatos(e)} 
            className="w-full p-3  bg-white border-gray-200"
            name="year"
            id=""
          >
            <option value="">--Seleciona Año--</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Planes
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input onChange={(e) => handleChangeDatos(e)}  type="radio" name="plan" value={plan.id}
                 />
              </Fragment>
            ))}
          </div>
        </div>
        <input

          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-500 hover:bg-indigo-700  text-white  uppercase p-3 cursor-pointer"
        />
      </form>
    </>
  );
}
