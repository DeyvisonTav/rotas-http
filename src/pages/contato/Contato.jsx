import { Link } from "react-router-dom";


export function Contato() {
  return (
    <div>
      <h1 className="flex flex-center  text-center justify-center items-center font-bold text-xl">Pagina contato</h1>
      <span className="flex flex-center  text-center justify-center items-center">Contato da empresa (dd) xxxx-xxxx</span>
       <div className="p-2 space-x-3 flex flex-center text-blue-400 underline hover:text-blue-500 text-center justify-center items-center">
        <Link to={'/'}>
         home
        </Link>
        <Link to={'/sobre'}>
         sobre
        </Link>

       </div>
       
    </div>
  )
}