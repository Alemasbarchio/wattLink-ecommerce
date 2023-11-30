import { CounterItem} from "../Counter/itemcount";
import { Link } from 'react-router-dom';

interface Products{
    id:number;
    name:string;
    price:number;
    imgProduct:string;
    qtdStock:number;
  }


const Item=({name,id,price,imgProduct,qtdStock}:Products)=>{
  

    return(
        
          <ul>
            <li className= "flex flex-col bg-slate-200 p-2 h-80 gap-5">
            <img className="w-56" src={imgProduct} alt="" />
        
            <h2 className="text-green-800 font-bold">{name}</h2>
            <h3>{price}</h3>
            <Link to={`/item-detail/${name}`}>
            <button className=" bg-green-600 border p-2 rounded-lg focus:border-blue-300 hover:opacity-75"> Detalhes do produto</button>
          </Link>
            </li>
          </ul>   
      

    )
}

export {Item}