import productDB from '../../assets/img/disjuntor_bipolar.png';
import productDM from '../../assets/img/disjuntor_monopolar.png';
import productDt from '../../assets/img/disjuntor_tripolar.png';
import productLL from '../../assets/img/lampada-led.png';
import { ItemList } from "./ItemList";
import { useState,useEffect } from "react";

interface Props {
  greeting: string;

}
interface Product{
name:string;
price:number;
imgProduct:string;
qtdStock:number;

}
  const ProdList = ({ greeting }: Props) => {
    const [products, setProducts] = useState<Product[]>([]);
  
    const productsData = (): Promise<Product[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { name: 'Disjuntor Bipolar 20a',price: 35.55,imgProduct:`${productDB}`,qtdStock:5},
            { name: 'Disjuntor Monopolar 10a',price: 9.85,imgProduct:`${productDM}`,qtdStock:6},
            { name: 'Disjuntor Tripolar 60a',price: 65.99,imgProduct:`${productDt}`,qtdStock:15},
            { name: 'Lampada Led 9w',price: 12.55,imgProduct:`${productLL}`,qtdStock:2},
            { name: 'Lampada Led 15w',price: 15.60,imgProduct:`${productLL}`,qtdStock:2},
            
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
    <div className="w-full  bg-slate-50 flex flex-col gap-10">
      <h1>{greeting}</h1>
       <ItemList items={products}/>
         
    </div>

  )
}

export { ProdList }