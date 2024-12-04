import { CarWid } from "../CartWidget/CartWidget";
import logo from '../../assets/img/logo-eletrica.png';
import { Link } from "react-router-dom";




const NavBar = () => {
  
  return (
    <div>
      <div className="bg-gray-300 p-5 shadow-lg flex justify-evenly h-12 items-center fixed w-full">
        <div>
          <img className="w-8" 
            src={logo}
            alt="logo" />
        </div>
        <ul className="flex gap-2 justify-center items-center">
          <li className="border-r-2 border-stone-500 pr-6 text-black"  >Conheça a WattLink</li>
          <Link to={`/`}>
            <li className="border-r-2 border-stone-500 pr-6">home</li>
          </Link>

          <Link to={`/produtos`}>
          <li className="border-r-2 border-stone-500 pr-6">Produtos</li>
          </Link>
          <li className="border-r-2 border-stone-500 pr-6">Contato</li>
          
        </ul>
        <CarWid />
       
       
      </div>
      
     
    </div>
  );
}

export { NavBar };
