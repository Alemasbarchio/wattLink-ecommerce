
import { useState,useEffect } from "react";
import { LogoContents } from "../ContentsLogo";
import { useParams } from 'react-router-dom';
import { ItemDetail } from "./itemDetail";
import { useProductCart } from '../../context/cartContext';
import { NavBar } from "../navbar/navbar";


interface ItemListProps {
  id: number;
  name: string;
  price: number;
  imgProduct: string;
  qtdStock: number;
}

const ItemDetailContainer = () => {
  const { name } = useParams<{ name: string }>();
  const { products,cartProduts } = useProductCart(); 
  
  
  const [detailProduct, setDetailProduct] = useState<ItemListProps | null>(null);

  const getProducts = (): Promise<ItemListProps[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        
        // procurar informação no carrinho para trazer valores atualizados para o itemDetail
        const searchName=cartProduts.some((produto) => produto.name === (name))
        if(cartProduts.length!=0 &&searchName){
          resolve(cartProduts);
        }
        
        if(cartProduts.length>=0 ||searchName){
        resolve(products);
      }
      

      }, 1500); 
    });
  };

  const getItem = async () => {
    try {
      const productsDataResult = await getProducts(); 
      const productByName = productsDataResult.find((produto) => produto.name === name);
          
      if (productByName) {
        setDetailProduct(productByName);
      } else {
        console.error('Produto não encontrado');
      }
    } catch (error) {
      console.error('Ops, ocorreu um erro:', error);
    }
  };

  useEffect(() => {
   
    getItem();
  }, [name, products]);

  return (
    <div>
      <NavBar/>
      <LogoContents />
      
      {detailProduct ? <ItemDetail {...detailProduct} /> : <p>Carregando...</p>}
      
    </div>
  );
};

export {ItemDetailContainer};
