import { Item } from './Item';
import { useEffect } from "react";
import productDB from '../../assets/img/disjuntor_bipolar.png';
import productDM from '../../assets/img/disjuntor_monopolar.png';
import productDt from '../../assets/img/disjuntor_tripolar.png';
import productLL from '../../assets/img/lampada-led.png';
import productCB from '../../assets/img/cabo branco.png';
import productCA from '../../assets/img/cabo azul.png';
import productCP from '../../assets/img/cabo preto.png';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'

import { useProductCart } from '../../context/cartContext';
import { Loading } from '../Loading/loading';


export interface ItemListProps {

  id: number;
  name: string;
  price: number;
  imgProduct: string;
  qtdStock: number;


}

const ItemList = () => {

  const { products, setProducts } = useProductCart();
  /*
    const productsData = (): Promise<ItemListProps[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {id:1, name: 'Disjuntor Bipolar 20A',price: 35.55,imgProduct:`${productDB}`,qtdStock:5},
            {id:2, name: 'Disjuntor Monopolar 10A',price: 9.85,imgProduct:`${productDM}`,qtdStock:6},
            {id:3,name: 'Disjuntor Tripolar 60A',price: 65.99,imgProduct:`${productDt}`,qtdStock:15},
            {id:4,name: 'Lampada Led 9w',price: 12.55,imgProduct:`${productLL}`,qtdStock:10},
            {id:5,name: 'Lampada Led 15w',price: 15.60,imgProduct:`${productLL}`,qtdStock:20},
            {id:6,name: 'Cabo Flexível Branco 4mm',price: 120.65,imgProduct:`${productCB}`,qtdStock:20},
            {id:7,name: 'Cabo Flexível Azul 6mm',price: 152.45, imgProduct:`${productCA}`,qtdStock:20},
            {id:8,name: 'Cabo Flexível Preto 2.5mm',price: 89.99, imgProduct:`${productCP}`,qtdStock:20},
            {id:9,name: 'Lampada Led 5w',price: 5.99, imgProduct:`${productLL}`,qtdStock:20},
            {id:10,name: 'Cabo Flexível Branco 2.5mm',price: 89.99, imgProduct:`${productCB}`,qtdStock:20},

            
          ]);
        }, 2000);
        
      });
    
    };
    */
  /*
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
     
 */
  useEffect(() => {

    const onMount = async () => {
      const db = getFirestore();

      const itemsCollection = collection(db, 'produtos');
      getDocs(itemsCollection).then((item) => {
        setTimeout(() => {
        item.docs.map((produto) => {
          const dbCollection = produto.data().produtos;
          setProducts(dbCollection);
        });

      }, 1000);
      })
    }
    onMount();

  }, []);


  return (
    <div className='flex flex-wrap gap-10 justify-center'>
      {products.map((item, index) => (
        <Item key={index} {...item} />

      ))}
 {products.length === 0 && <Loading loading={true} />}
    </div>
  );

};

export { ItemList };
