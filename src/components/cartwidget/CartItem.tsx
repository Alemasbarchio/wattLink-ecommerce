import { ChangeEvent, useEffect, useState } from "react";
import { useProductCart } from "../../context/cartContext";
import { NavBar } from "../navbar/navbar";
import { LogoContents } from "../ContentsLogo";

const CartItem=()=>{
    const { cartProduts } = useProductCart();
    const [quantidades, setQuantidades] = useState<{ [key: number]: number }>({});


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, productId: number) => {
        const { value } = event.target;
                setQuantidades((prevQuantidades) => ({
            ...prevQuantidades, [productId]: parseInt(value)

        }));
    };
    const totalPrice = cartProduts.reduce(
        (total, produto) => total + (quantidades[produto.id] || 0) * produto.price,
        0
      );
    
    
    return (

        <div className="bg-zinc-100">

            </div>)
};

export {CartItem}