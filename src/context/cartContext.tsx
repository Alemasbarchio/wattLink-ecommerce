import React, { createContext, useContext, useState } from "react";

interface IBDProduct {
   products: {
      _id: string;
      name: string;
      description:string,
      price: number;
      imgProduct: string;
      qtdStock: number;
   }[];
   setProducts: (products: {
      _id: string;
      name: string;
      description:string,
      price: number;
      imgProduct: string;
      qtdStock: number;
   }[]) => void

   cartProduts: any[];
   setCartProduts: (cartProduts: any) => void;
   AddProductCart: (name: string, value: number, stockQtd: number) => void
   
}

const cartProductDefault = {

   products: [],
   setProducts: () => null,
   cartProduts: [],
   setCartProduts: () => null,
   AddProductCart: () => null,
   
}

const CartProduct = createContext<IBDProduct>(cartProductDefault);

interface IProvider {
   children: React.ReactNode

}
const CartProductProvider = ({ children }: IProvider) => {
   const [products, setProducts] = useState<IBDProduct['products']>([]);
   const [cartProduts, setCartProduts] = useState<IBDProduct['cartProduts']>([]);

   const AddProductCart = (name: string, value: number, stockQtd: number) => {
      const updateCartProducts = [...cartProduts];
      
    
      const productByBData = products.find((produto) => (produto.name === (name)));
      
      const isProductCart = updateCartProducts.some((produto) => produto._id === productByBData?._id)
      

      if (productByBData) {
         const addNumberItens = { ...productByBData, qtdItens: value} // adicionando parâmetro n°itens ao carrinho
                  
         if (!isProductCart) {
            updateCartProducts.push(addNumberItens);
            setCartProduts(updateCartProducts);
         }
         else {// se o produto ja existir no carrinho modificar apenas quantidade de itens e estoque
            let updateNumberItens = updateCartProducts.find((produto) => produto._id === productByBData?._id)
            updateNumberItens.qtdItens = value + updateNumberItens.qtdItens;
                    
         }

      }

   }
   

   return (
      <CartProduct.Provider
         value={{
            products, setProducts,
            cartProduts, setCartProduts, AddProductCart
         }}
      >
         {children}

      </CartProduct.Provider>

   )

}
const useProductCart = () => useContext(CartProduct);
export { useProductCart, CartProductProvider };