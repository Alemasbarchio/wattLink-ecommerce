import { useProductCart } from "../../context/cartContext";
import { Order } from "../Order/Order";
import { ChangeEvent, useState } from "react";



const CartItem = () => {
    const { cartProduts, setCartProduts } = useProductCart();
   
    const initialQuantityItens: { [key: number]: number } = {};
        cartProduts.forEach((produto) => {
            initialQuantityItens[produto._id] = produto.qtdItens || 0;
         
        });

    const [quantidades, setQuantidades] = useState<{ [key: number]: number }>(initialQuantityItens);
        const handleInputChange = (event: ChangeEvent<HTMLInputElement>, productId: number) => {
            const { value } = event.target;
            setQuantidades((prevQuantidades) => ({ ...prevQuantidades, [productId]: parseInt(value) }));
        };

        const totalPrice = cartProduts.reduce(
            (total, produto) => total + (quantidades[produto._id] || 0) * produto.price, 0);

        const deleteItens = (productId: number) => {
            const upDateCcartProducts = cartProduts.filter((produto) => produto._id !== productId);
            setCartProduts(upDateCcartProducts);

        };

    const [isCheckBuyer, SetIsCheckBuyer] = useState(false);
        const openModalBuyer = () => {
            SetIsCheckBuyer(!isCheckBuyer);
            const updatedCartProducts = cartProduts.map((produto) => {
                if (quantidades.hasOwnProperty(produto._id)) {
                    produto.qtdItens = quantidades[produto._id];
                    if (produto.qtdStock > 0) {
                        produto.qtdStock = produto.qtdStock - quantidades[produto._id];
                    }
                    return {
                        ...produto, precoTotal: totalPrice,
                    }
                }
                return produto;
            });

            setCartProduts(updatedCartProducts);

        };
        const closeModalBuyer = () => {
            SetIsCheckBuyer(false);
        }


    return (

        <div className="bg-zinc-10 ">
            {cartProduts.map((produto) => (
                <div key={produto._id} className="pt-5 pr-10 pl-10">
                    <ul className="w-full flex pl-28 gap-20 items-center pt-5 border-gray-400 border-t-2 border-b-2 p-2 bg-slate-50 "  >
                        <li className="h-24"> <img className="w-32" src={produto.imgProduct}/> </li>
                        <li className="w-52"><h1> {produto.name}  </h1> </li>
                        <li>
                            <input
                                type="number"
                                min="0"
                                max={produto.qtdStock}
                                value={quantidades[produto._id]}
                                onChange={(e) => handleInputChange(e, produto._id)}
                                className="border-gray-950 w-24 no-spinner border p-2 rounded-md focus:outline-none focus:border-green-600 hover:bg-slate-100"
                            />
                        </li>
                        <li> <p className="text-red-600 w-20">R$ {
                            (produto.price * quantidades[produto._id]).toFixed(2)}</p>
                        </li>
                        <button className="hover:text-red-700"
                            onClick={() => deleteItens(produto._id)} > excluir
                        </button>
                    </ul>
                </div>
            ))}

            <div className="flex justify-end items-center pt-10">
                <  h2 className="border-green-300 border flex items-centerw-42 h-10 p-2 font-semibold  pr-5">  Total Preço: {" R$"} {totalPrice.toFixed(2)}</h2>
                <button className="bg-green-600 w-52 h-14 border p-2 rounded-lg focus:border-blue-300 hover:opacity-75" onClick={openModalBuyer}> Finalizar Compra</button>
            </div>
            <div>

                {isCheckBuyer && <Order isOpen={isCheckBuyer} onClose={closeModalBuyer} />}
            </div>

        </div>

    );
};


export { CartItem };