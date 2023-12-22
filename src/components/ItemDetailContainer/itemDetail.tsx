import { CounterItem } from "../Counter/itemcount";



interface ItemDetailProps {
  name: string;
  price: number;
  imgProduct: string;
  qtdStock: number;



}

const ItemDetail = ({ name, price, imgProduct, qtdStock }: ItemDetailProps) => {

  const AddToCart = () => {

  };

  return (

    <div className="pt-5">

      <ul className="flex justify-center  text-center gap-10 " >

        <li className="border-green-300 border p-4 w-72 flex flex-col">
          <h2 className="text-green-800 font-bold text-center text-3xl" >{name}</h2>
          <img src={imgProduct} />
          <p className="text-2xl"> R$ { price}</p>
          <CounterItem stock={qtdStock} initial={1} onAdd={AddToCart} />

        </li>

      </ul>

    </div>
  )

}


export { ItemDetail };