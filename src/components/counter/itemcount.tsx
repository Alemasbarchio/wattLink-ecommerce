import { ChangeEvent, useEffect, useState } from "react";

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
}

const CounterItem = ({ stock, initial, onAdd }: ItemCountProps) => {
    const [value, setValue] = useState(initial);
    const [stockQtd, setStockQtd] = useState<number>(stock);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);
    setValue(inputValue);

  }
  useEffect(() => {
    console.log("No estoque tem " + stockQtd);
  }, [stockQtd])

  const addcart = () => {
   
    if (value <= stockQtd && stockQtd !== 0) {
      console.log(`Adicionar ${value}  itens ao carrinho`);
      setStockQtd((prevStok => prevStok - value))
      onAdd(value);
    }
    else {
      console.log("Estoque Indisponivel")
      }
  }

  return (

    <div className="p-2 flex flex-col items-center justify-center gap-5" >
      <input type="number" min="1" max={stockQtd} value={value} onChange={handleInputChange}
        className=" border-gray-950 w-24 no-spinner border p-2 rounded-md focus:outline-none focus:border-green-600"
        
      />
      <div >
        <label>Estoque disponível</label>
         <h2>{stockQtd}</h2>
      </div>
      
      <button onClick={addcart} className=" bg-green-600 border p-2 rounded-lg focus:border-blue-300 hover:opacity-75"> Adicionar ao Carrinho</button>
        
    </div>

  )

}
export { CounterItem }