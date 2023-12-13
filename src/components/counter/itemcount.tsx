import { ChangeEvent, useEffect, useState } from "react";
import { useProductCart } from '../../context/cartContext';
import {useParams } from 'react-router-dom';

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
}

const CounterItem = ({ stock, initial, onAdd }: ItemCountProps) => {
  const [value, setValue] = useState(initial);
  const [stockQtd, setStockQtd] = useState<number>(stock);
  const { name } = useParams<{ name: string }>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);
    setValue(inputValue);
  }

  useEffect(() => {

    console.log(cartProduts);

  }, [stockQtd])

  const { products, cartProduts, setCartProduts } = useProductCart();

  const createArrayCart = () => {
    const updateCartProducts = [...cartProduts];
    const productByBData = products.find((produto) => (produto.name === (name)));
    const isProductCart = updateCartProducts.some((produto) => produto.id === productByBData?.id)

    const addNumberItens = { ...productByBData, qtdItens: value } // adicionando parâmetro n°itens ao carrinho
    addNumberItens.qtdStock = stockQtd - value;

    if (!isProductCart) {
      updateCartProducts.push(addNumberItens);
      setCartProduts(updateCartProducts);

    } else {// se o produto ja existir no carrinho modificar apenas quantidade de itens e estoque
      console.log('Produto já existe no carrinho.');
      //
      let updateNumberItens = updateCartProducts.find((produto) => produto.id === productByBData?.id)
      updateNumberItens.qtdItens = value + updateNumberItens.qtdItens;
      updateNumberItens.qtdStock = addNumberItens.qtdStock;

    }

  }

  const addcart = () => {

    if (value <= stockQtd && stockQtd !== 0) {
      setStockQtd((prevStok => prevStok - value))
      onAdd(value);
      createArrayCart();
    }

  }

  return (

    <div className="p-2 flex flex-col items-center justify-center gap-5" >
      <input type="number" min="0" max={stockQtd} value={value} onChange={handleInputChange}
        className=" border-gray-950 w-24 no-spinner border p-2 rounded-md focus:outline-none focus:border-green-600"

      />
      <div >
        {stockQtd < 1 ? <label className="text-red-500">Estoque indisponível : {stockQtd}</label> : <label>Estoque disponível: {stockQtd}</label>}

      </div>
      <div className="flex gap-3 justify-center items-center">
        <button onClick={addcart} className={`bg-green-600 border p-2 rounded-lg focus:border-blue-300 ${stockQtd < 1 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-75'
          }`} disabled={stockQtd < 1 ? true : false}>  Adicionar ao Carrinho </button>

      </div>

    </div>

  )

}
export { CounterItem }