import { Item } from './Item';
import { useEffect } from "react";
/*
import productDB from '../../assets/img/disjuntor_bipolar.png';
import productDM from '../../assets/img/disjuntor_monopolar.png';
import productDt from '../../assets/img/disjuntor_tripolar.png';
import productLL from '../../assets/img/lampada-led.png';
*/
import { getFirestore, collection, getDocs } from 'firebase/firestore'

import { useProductCart } from '../../context/cartContext';
import { Loading } from '../Loading/loading';
import { ProdutoService } from '../../service/ProdutoService';

const produtoServive = new ProdutoService();

export interface ItemListProps {

  _id: string;
  title: string;
  price: number;
  imgProduct: string;
  qtdStock: number;


}

const ItemList = () => {

  const { products, setProducts } = useProductCart();
  /* MOCK / TESTES
    const productsData = (): Promise<ItemListProps[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            
            {id:1, name: 'Disjuntor Bipolar 20A',price: 35.55,imgProduct:`${productDB}`,qtdStock:5},
            {id:2, name: 'Disjuntor Monopolar 10A',price: 9.85,imgProduct:`${productDM}`,qtdStock:6},
            {id:3,name: 'Disjuntor Tripolar 60A',price: 65.99,imgProduct:`${productDt}`,qtdStock:15},
            {id:4,name: 'Lampada Led 9w',price: 12.55,imgProduct:`${productLL}`,qtdStock:10},
            {id:4,name: 'Lampada Led 9w',price: 12.55,imgProduct:`${productLL}`,qtdStock:10},
                        
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

*/

  useEffect(() => {

    const onMount = async () => {
      try {
        const response= await produtoServive.listarTodos();
          
       setProducts(response.data.produtos);
                            
      } catch (error) {
     
      }
    
    }
    onMount();

  }, []);


  return (
    <div className='flex gap-10 flex-wrap justify-center'>
      {products.map((item, index) => (
        <Item key={index} {...item} />

      ))}
 {products.length === 0 && <Loading loading={true} />}
    </div>
  );

};

export { ItemList };
