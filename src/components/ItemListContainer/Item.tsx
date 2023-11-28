import { CounterItem} from "../Counter/itemcount";

interface Products{
    id?:number;
    name:string;
    price:number;
    imgProduct:string;
    qtdStock:number;
  }


const Item=({name,id,price,imgProduct,qtdStock}:Products)=>{
   const AddToCart = () => {
    
  };

    return(
        
          <ul>
            <li className="bg-slate-200 p-2">
            <img className="w-56" src={imgProduct} alt="" />
            <h1>{id}</h1>
            <h2 className="text-green-800 font-bold">{name}</h2>
            <h3>{price}</h3>
            <CounterItem stock={qtdStock} initial={1} onAdd={AddToCart} />
            </li>
          </ul>   
      

    )
}

export {Item}