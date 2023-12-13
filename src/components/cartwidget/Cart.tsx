import { useProductCart } from "../../context/cartContext";
import { LogoContents } from "../ContentsLogo";
import { NavBar } from "../navbar/navbar";

const Cart = () => {
    const { cartProduts } = useProductCart();


    return (

        <div>
            <NavBar/>
            <LogoContents />
            {cartProduts.map((produtos) => (

                <div>
                    <div className="flex gap-20 items-center "  >
                        <img className="w-24" src={produtos.imgProduct} />
                        <h1> {produtos.name}  </h1>
                        <p>{produtos.qtdItens}</p>
                       

                    </div>

                </div>
            ))}
        </div>
    )
}
export { Cart };