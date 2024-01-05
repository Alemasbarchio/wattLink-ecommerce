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
        <ul className="flex gap-5 justify-center items-center">
          <Link to={`/`}>
            <li>home</li>
          </Link>
          
        </ul>
        <CarWid />
      </div>
      
     
    </div>
  );
}

export { NavBar };
