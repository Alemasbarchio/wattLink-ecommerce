import { Link } from 'react-router-dom';
import iconCar from '../../assets/img/icon_carrinho.svg';
import iconLogin from '../../assets/img/icon_login.svg';
import { useProductCart } from '../../context/cartContext';
const CarWid=()=>{

const {cartProduts}=useProductCart();

    return(
    
        <div className="  flex justify-end gap-10">
           
        <Link to={`/carrinho/`}>
        <div 
        className="cursor-pointer bg-cover bg-center w-10 h-10"
        style={{ backgroundImage: `url(${iconCar})` }}
            >
       <p className='text-white flex justify-center items-center font-semibold border rounded-full bg-red-600 w-4 h-4'>{cartProduts.length}</p>
        </div>

          </Link>
          
          <Link to={`/login`}>
        <div 
        className="bg-cover bg-center w-10 h-10" 
        style={{ backgroundImage: `url(${iconLogin})`  }}
            >             
        </div>
        </Link>
        </div>
            
    )
    
    }
    
    export {CarWid}