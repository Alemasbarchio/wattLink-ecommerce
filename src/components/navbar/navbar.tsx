import { CarWid } from "../cartwidget/cartwidget"

//import logo from './img/logo-eletrica.png';
const NavBar=()=>{
return(

    <div className="bg-gray-300 p-5 shadow-lg flex justify-evenly">
       
       <div>
        <img className="w-10"  src='./img/logo-eletrica.png' alt="logo"/>
       
        </div>
        <ul className="flex gap-5 cursor-pointer justify-center items-center">
      
            <li>home</li>
            <li> produtos </li>
            <li> login </li>
        </ul>
               <CarWid/>    
    </div>
    
)

}

export {NavBar}