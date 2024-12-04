
import { Link } from 'react-router-dom';

interface Products{
    _id:string;
    name:string;
    description:string,
    price:number;
    imgProduct:string;
    qtdStock:number;
  }


const Item=({name,price,imgProduct,description}:Products)=>{
  

    return(
        
          <ul >
            <li className= "flex flex-col bg-white h-80 gap-2">
            <img className="w-56" src={imgProduct} alt="" />
        
            <h2 className="text-green-800 font-bold">{name}</h2>
            <h3> R$ {price}</h3>
            <h3> {description}</h3>
           
           
            <Link to={`/item-detail/${name}`}>
            <button className=" bg-green-600 border p-2 rounded-lg focus:border-blue-300 hover:opacity-75"> Detalhes do produto</button>
          </Link>
            </li>
          </ul>   
      

    )
}

export {Item}