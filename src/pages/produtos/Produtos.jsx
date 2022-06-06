import { useParams } from "react-router-dom"

export function Produtos() {
  
  const  {id} = useParams();

  return(
    <div>

      <h1 className="flex flex-center  text-center justify-center items-center font-bold text-xl">
        Meu produto é: {id}
      </h1>
    </div>
  )
}