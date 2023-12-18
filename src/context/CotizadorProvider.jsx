import { createContext  , useState} from "react"
import {obtenerDiferenciaYear , calcularMarca , calcularPlan , formatearDinero} from '../helpers/index'
const  CotizadorContext = createContext();


const CotizadorProvider = ({children}) => {
    const [datos, setdatos] = useState({
        marca : '',
        year : '',
        plan : ''
    })
    const [error, seterror] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setcargando] = useState(false)
   const handleChangeDatos = e => {
    setdatos({
        ...datos,
        [e.target.name] : e.target.value
    })
   }

   const cotizarSeguro = () => {
    //una base
    let resultado = 2000
    const diferenia = obtenerDiferenciaYear(datos.year)


    //hay que restar el 3% de cada año 
    resultado -= ((diferenia * 3) * resultado / 100)

    //americano 15%

    //europeo 30%
    //asiatico 5%
    resultado *= calcularMarca(datos.marca)
    console.log(resultado)
    //basico 20%

    //completo 50//
    resultado *= calcularPlan(datos.plan)

    resultado = resultado.toFixed(2)
     //fomatear dinero 
   resultado = formatearDinero(resultado)
   setcargando(true)

   setTimeout(() => {
    setResultado(resultado)
    setcargando(false)
   }, 3000);
  
   }

  
    return (
        <CotizadorContext.Provider value={{datos , handleChangeDatos , seterror , error , cotizarSeguro , resultado, cargando}}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider 
}
export default CotizadorContext 
