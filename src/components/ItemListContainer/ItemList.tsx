import { Item } from './Item';
import { useState,useEffect } from "react";
import productDB from '../../assets/img/disjuntor_bipolar.png';
import productDM from '../../assets/img/disjuntor_monopolar.png';
import productDt from '../../assets/img/disjuntor_tripolar.png';
import productLL from '../../assets/img/lampada-led.png';


export interface ItemListProps {
 
    id: number;
    name: string;
    price: number;
    imgProduct: string;
    qtdStock: number;
  

}

const ItemList = () => {
  const [products, setProducts] = useState<ItemListProps[]>([]);
  
    const productsData = (): Promise<ItemListProps[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {id:1, name: 'Disjuntor Bipolar 20a',price: 35.55,imgProduct:`${productDB}`,qtdStock:5},
            {id:2, name: 'Disjuntor Monopolar 10a',price: 9.85,imgProduct:`${productDM}`,qtdStock:6},
            {id:3,name: 'Disjuntor Tripolar 60a',price: 65.99,imgProduct:`${productDt}`,qtdStock:15},
            {id:4,name: 'Lampada Led 9w',price: 12.55,imgProduct:`${productLL}`,qtdStock:2},
            {id:5,name: 'Lampada Led 15w',price: 15.60,imgProduct:`${productLL}`,qtdStock:2},
            
          ]);
        }, 2000);
        
      });
    
    };
    useEffect(() => {
      const onMount = async () => {
        try {
          const productsDataResult = await productsData();
          setProducts(productsDataResult);
        } catch (error) {
          console.error('Ops, ocorreu um erro:', error);
        
        }
      };
  
      onMount();
    }, []); 

  
  return (
    <div className='flex flex-wrap gap-10 justify-center'>
      {products.map((item, index) => (
        <Item key={index} {...item} />
   
      ))}
      

    
         
    </div>
  );
   
};

export { ItemList};
