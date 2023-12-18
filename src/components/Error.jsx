import useCotizador from "../hooks/useCotizador"



const Error = () => {
    const {error} = useCotizador()
  return (
    <div>
      <p className=" bg-red-600 text-white text-3xl font-black text-center rounded p-3">{error}</p>
    </div>
  )
}

export default Error
