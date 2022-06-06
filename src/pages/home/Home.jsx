import { Link } from "react-router-dom"

export function Home() {
  return (
    <div>
      <h1 className="flex flex-center  text-center justify-center items-center font-bold text-xl">Bem vindo a pagina Home</h1>
      <span className="flex flex-center  text-center justify-center items-center">sujeito programador</span>
      <Link
      className="flex flex-center text-blue-400 underline hover:text-blue-500 text-center justify-center items-center"
      to="/sobre" >
          sobre
      </Link>
      <Link
      className="flex flex-center text-blue-400 underline hover:text-blue-500 text-center justify-center items-center"
      to="/contato" >
          contato
      </Link>
    </div>
  )
}