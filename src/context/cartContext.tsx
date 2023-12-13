import React, { createContext, useContext, useState } from "react";

interface IBDProduct {
   products: {
      id: number;
      name: string;
      price: number;
      imgProduct: string;
      qtdStock: number;
   }[];
   setProducts: (products: {
      id: number;
      name: string;
      price: number;
      imgProduct: string;
      qtdStock: number;
   }[]) => void

   cartProduts: any[];
   setCartProduts: (cartProduts: any) => void;

}

const cartProductDefault = {
   
   products: [],
   setProducts: () => null,
   cartProduts: [],
   setCartProduts: () => null,
}

const CartProduct = createContext<IBDProduct>(cartProductDefault);

interface IProvider {
   children: React.ReactNode

}
const CartProductProvider = ({ children }: IProvider) => {
   const [products, setProducts] = useState<IBDProduct['products']>([]);
   const [cartProduts, setCartProduts] = useState<[]>([]);

   return (
      <CartProduct.Provider
         value={{
            products, setProducts,
            cartProduts, setCartProduts
         }}
      >
         {children}

      </CartProduct.Provider>

   )

}
const useProductCart = () => useContext(CartProduct);
export { useProductCart, CartProductProvider };