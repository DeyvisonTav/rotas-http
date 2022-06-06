import { Link } from "react-router-dom"

export function Sobre() {
  return (
    <div>
       <h1 className="flex flex-center  text-center justify-center items-center font-bold text-xl">Pagina sobre a empresa!</h1>
         <Link 
          className="flex flex-center text-blue-400 underline hover:text-blue-500 text-center justify-center items-center"
         to="/">Home
         </Link>
         <Link
      className="flex flex-center text-blue-400 underline hover:text-blue-500 text-center justify-center items-center"
      to="/contato" >
          contato
      </Link>
    </div>
  )
}