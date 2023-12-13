import { Link } from 'react-router-dom';
import iconCar from '../../assets/img/icon_carrinho.svg';
import { useProductCart } from '../../context/cartContext';
const CarWid=()=>{

const {cartProduts}=useProductCart();


    return(
    
        <div className="cursor-pointer flex justify-end pr-16">
           
        <Link to={`/carrinho/`}>
        <div 
        className="bg-cover bg-center w-10 h-10"
        style={{ backgroundImage: `url(${iconCar})` }}
            >
       <p className='text-white flex justify-center items-center font-semibold border rounded-full bg-red-600 w-4 h-4'>{cartProduts.length}</p>
        </div>

          </Link>
        </div>
            
    )
    
    }
    
    export {CarWid}