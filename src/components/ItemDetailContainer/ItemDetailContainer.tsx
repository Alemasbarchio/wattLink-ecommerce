
import { useState, useEffect } from "react";
import { LogoContents } from "../ContentsLogo";
import { useParams } from 'react-router-dom';
import { ItemDetail } from "./itemDetail";
import { useProductCart } from '../../context/cartContext';
import { NavBar } from "../navbar/navbar";
import { Loading } from "../Loading/loading";
import { ProductSummary } from "../ProductsSummary/productsSummary";
import { Footer } from "../Footer/footer";


interface ItemListProps {
  _id: string;
  name: string;
  price: number;
  imgProduct: string;
  qtdStock: number;
}

const ItemDetailContainer = () => {
  const { name } = useParams<{ name: string }>();
  const { products} = useProductCart();
 
  const [detailProduct, setDetailProduct] = useState<ItemListProps | null>(null);
  
  
  const getProducts = (): Promise<ItemListProps[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {

         resolve(products);
    
      }, 1000);
    });
  };

  const getItem = async () => {
    try {
      const productsDataResult = await getProducts();
      const productByName = productsDataResult.find((produto) => produto.name===name);
     
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
    <div className="flex flex-col h-full">
      <NavBar />
      <LogoContents />
      <div className="flex justify-evenly items-center pl-48">
        {detailProduct ? <ItemDetail {...detailProduct} /> : <Loading loading={true} />}
        {detailProduct ?<ProductSummary nameQuery={name}/>:null} 
       
        
      </div>
      {detailProduct?<Footer/>:null}
    </div>
  )
}



export { ItemDetailContainer };
