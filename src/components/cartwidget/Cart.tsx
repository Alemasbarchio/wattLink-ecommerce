import { Link } from "react-router-dom";
import { useProductCart } from "../../context/cartContext";
import { LogoContents } from "../ContentsLogo";
import { NavBar } from "../navbar/navbar";

import { CartItem } from "./CartItem";
import { Footer } from "../Footer/footer";



const Cart = () => {
    const{cartProduts}=useProductCart();
    

    return (
<div className="w-full">
            <NavBar />
            <LogoContents />
             { cartProduts.length!==0? <CartItem/>:
             
              <div className="flex flex-col gap-10 items-center justify-center pt-10"> <h2 className="font-bold text-2xl"> Sem produtos no carrinho </h2> 
              <Link to="/"><button className="bg-green-600 w-52 h-14 border p-2 rounded-lg focus:border-blue-300 hover:opacity-75"> Pesquisar Produtos</button></Link>
              </div> }
             {cartProduts.length>=3? <Footer/>:null } 
           
            
           
</div>

    )
            
};


export { Cart };