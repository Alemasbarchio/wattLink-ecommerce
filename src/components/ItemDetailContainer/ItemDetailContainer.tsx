
import { useState,useEffect } from "react";
import productDB from '../../assets/img/disjuntor_bipolar.png';
import productDM from '../../assets/img/disjuntor_monopolar.png';
import productDt from '../../assets/img/disjuntor_tripolar.png';
import productLL from '../../assets/img/lampada-led.png';
import { LogoContents } from "../ContentsLogo";
import { useParams } from 'react-router-dom';
import { ItemDetail } from "./itemDetail";




interface ItemListProps {
  id: number;
  name: string;
  price: number;
  imgProduct: string;
  qtdStock: number;
}

const ItemDetailContainer = () => {
  const { name } = useParams<{ name: string }>();
    const [product, setProduct] = useState<ItemListProps | null>(null);

  const getProducts = (): Promise<ItemListProps[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Disjuntor Bipolar 20a', price: 35.55, imgProduct: `${productDB}`, qtdStock: 5 },
          { id: 2, name: 'Disjuntor Monopolar 10a', price: 9.85, imgProduct: `${productDM}`, qtdStock: 6 },
          { id: 3, name: 'Disjuntor Tripolar 60a', price: 65.99, imgProduct: `${productDt}`, qtdStock: 15 },
          { id: 4, name: 'Lampada Led 9w', price: 12.55, imgProduct: `${productLL}`, qtdStock: 2 },
          { id: 5, name: 'Lampada Led 15w', price: 15.60, imgProduct: `${productLL}`, qtdStock: 2 },
        ]);
      }, 1500);
    });
  };

  const getItem = async (): Promise<void> => {
    try {
      
      const productsDataResult = await getProducts(); 
      const productByName = productsDataResult.find((produto) => produto.name === (name));

      if (productByName) {
        setProduct(productByName);
      } else {
        console.error('Produto não encontrado');
      }
    } catch (error) {
      console.error('Ops, ocorreu um erro:', error);
    }
  };

  useEffect(() => {
    getItem();
  }, [name]);

  return (
    <div>
      <LogoContents />
      {product ? <ItemDetail {...product} /> : <p>Carregando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
