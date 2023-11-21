import { ChangeEvent, useState } from "react";

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
}

const CounterItem = ({ stock, initial, onAdd }: ItemCountProps) => {
  const [value, setValue] = useState(initial);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);
    setValue(inputValue);

  }

  return (

    <div className="p-4 flex flex-col items-center justify-center gap-10" >
      <input type="number" min="1" value={value} onChange={handleInputChange}
        className="w-32 no-spinner border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button onClick={()=>onAdd(value)} className=" bg-green-600 border p-2 rounded-lg focus:border-blue-300 hover:opacity-75"> Adicionar ao Carrinho</button>

    </div>

  )

}
export { CounterItem }