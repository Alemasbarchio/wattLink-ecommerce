
import { useState,useEffect } from "react";
import productDB from '../../assets/img/disjuntor_bipolar.png';
import { ItemDetail } from "./itemDetail";
import { LogoContents } from "../ContentsLogo";



 interface ItemListProps {
 
    id: number;
    name: string;
    price: number;
    imgProduct: string;
    qtdStock: number;
  

}

const ItemDetailContainer = () => {
  const [products, setProducts] = useState<ItemListProps[]>([]);
  
    const getItem = (): Promise<ItemListProps[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {id:1, name: 'Disjuntor Bipolar 20a',price: 35.55,imgProduct:`${productDB}`,qtdStock:5},
        
            
          ]);
        }, 500);
        
      });
    
    };
    useEffect(() => {
      const onMount = async () => {
        try {
          const productsDataResult = await getItem();
          setProducts(productsDataResult);
        } catch (error) {
          console.error('Ops, ocorreu um erro:', error);
        
        }
      };
  
      onMount();
    }, []); 

  
  return (
    <div >
       <LogoContents/>
      {products.map((item, index) => (
        <ItemDetail key={index} {...item} />
   
      ))}
      

   
         
    </div>
  );
   
};

export { ItemDetailContainer};
