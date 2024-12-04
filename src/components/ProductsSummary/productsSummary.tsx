import { Link } from "react-router-dom"
import { useProductCart } from "../../context/cartContext";


interface Props{
nameQuery?:string;

}

const ProductSummary=({nameQuery}:Props)=>{
    const {cartProduts } = useProductCart();



    
     const logImg = cartProduts.find((produto) => produto.name === nameQuery);
   
   
return(
    <div className="w-96 h-96">
          {cartProduts.find((produto) => produto.name === nameQuery)  &&  (
           
            <div className=" flex flex-col items-end gap-5  border-green-700 p-2" >
              <div className=" flex gap-5">
                <img className="w-24 h-20 rounded-full border-r-8 border-l-4 border-green-800" src={logImg?.imgProduct} />
                <h1 className="font-semibold">{nameQuery}</h1>
               
                
              </div>
                
              <span className="font-bold text-3xl">Adicionado ao carrinho</span>
              <div className="flex gap-10 pt-32">
              <Link to={`/carrinho/`}>
                <button className="bg-green-600 border p-2 rounded-lg focus:border-blue-300 hover:opacity-75">
                 Ir para o carrinho
                </button>
                </Link>
                <Link to={`/`}>
                <button className="bg-green-600 border p-2 rounded-lg focus:border-blue-300 hover:opacity-75">
                  Ver mais produtos
                </button>
                </Link>
              </div>
            </div>


          )}

        </div>
      
)
}

export {ProductSummary}