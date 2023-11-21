import { CounterItem } from "../counter/itemcount";
interface Props {
  greeting: string;

}

const ProdList = ({ greeting }: Props) => {

  const AddToCart = (quantity: number) => {
    // Lógica para adicionar ao carrinho
    if (quantity <= 10) {
      console.log(`Adicionar ${quantity} ao carrinho`);
    }

    else {
      console.log("estoque indisponível")
    }
  };

  return (
    <div className="w-screen h-96 bg-white flex flex-col gap-10 justify-start items-center">
      <h1>{greeting}</h1>
      <ul className="w-52 flex gap-5">
        <li className="bg-slate-300">
          <CounterItem stock={10} initial={1} onAdd={AddToCart} />
        </li>

      </ul>

    </div>

  )
}

export { ProdList }