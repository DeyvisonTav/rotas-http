import { Link } from "react-router-dom"
export function Error() {
  return (
    <div>
       <h1 className="flex flex-center  text-center justify-center items-center font-bold text-xl">
         Ops!! parece que essa pagina não exite !
       </h1>
       <div className="p-2 space-x-3 flex flex-center text-blue-400 underline hover:text-blue-500 text-center justify-center items-center">
        <Link to={'/'}>
         home
        </Link>
        <Link to={'/sobre'}>
         sobre
        </Link>
        <Link to={'/contato'} >
         contato
        </Link>

       </div> 
        
     

    </div>

  )
}