import { CounterItem } from "../Counter/itemcount";



interface ItemDetailProps{
  
  name:string;
  price:number;
  imgProduct:string;
  qtdStock:number;
  

         
}

const ItemDetail=({name,price,imgProduct,qtdStock}:ItemDetailProps)=>{

 

  const AddToCart = () => {
    
  };
  
     return(

        <div className="pt-5">
         
         <ul className="flex justify-center items-center text-center  " >
       
          <li className="border-green-300 border p-2  w-2/12 flex flex-col">
          <h2 className="text-green-800 font-bold text-center text-4xl" >{name}</h2>
          <img src={imgProduct}/> 
          <p className="text-2xl"> {price}</p>
          <CounterItem stock={qtdStock} initial={1} onAdd={AddToCart}/>
       
          </li> 
          </ul>           
    
        </div>
    )
     
    }


export {ItemDetail};