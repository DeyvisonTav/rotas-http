import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-black h-16 flex justify-between items-center  px-5 mb-10">
      <h2 className="text-md font-bold text-blue-500">Sujeito Dev</h2>
         <div className="text-blue-400 underline hover:text-blue-500 space-x-2">
            <Link to={"/"}>
             home
            </Link>
            <Link to={"/sobre"}>
             sobre
            </Link>
            <Link to={"/contato"}>
            contato
            </Link>
         </div> 

    </header>
  )
}