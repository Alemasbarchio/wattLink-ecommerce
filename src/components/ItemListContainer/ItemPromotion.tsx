import { Item } from './Item';
import { useEffect } from "react";
import { getFirestore, doc, getDoc, collection, getDocs, DocumentData } from 'firebase/firestore'
import { useProductCart } from '../../context/cartContext';
import { Loading } from '../Loading/loading';


const ItemPromotion = () => {

  const { products, setProducts } = useProductCart();

  useEffect(() => {

    const onMount = async () => {
      const db = getFirestore();
      const selectItens = [1, 5, 8];
      const itemsCollection = collection(db, 'produtos');

      getDocs(itemsCollection).then((item) => {
        setTimeout(() => {
          item.docs.map((produto) => {
            const dbCollection = produto.data().produtos;
            const filterProducts = dbCollection.filter((doc: DocumentData) => selectItens.includes(doc.id));
            setProducts(filterProducts);
          });

        }, 1000);
      })
    }
    onMount();

  }, []);


  return (
    <div className='flex flex-col justify-center gap-16'>

      <div className=' flex flex-col bg-gray-200 pt-5 gap-5' >
        <h1 className='text-5xl font-title font-semibold'>Produtos em destaque</h1>
        <div className=' flex gap-10 flex-wrap justify-center'>
          {products.map((item, index) => (
            <Item key={index} {...item} />

          ))}
          {products.length === 0 && <Loading loading={true} />}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-5xl font-title font-semibold text-gray-700'> Quer ficar por dentro das nossas ofertas?</h1>
        <input
          type="text"
          name="name"
          placeholder="Insira seu melhor E-mail"
          className="w-80 h-14 px-4 py-2 text-center font-semibold border rounded-md focus:outline-none focus:ring-2 focus:border-green-600"
        />
        <button
          className={`w-28 bg-green-500 text-black border p-2 rounded-lg hover:bg-green-900 hover:text-white}`}
        >
          Enviar
        </button>
      </div>
    </div>

  );

};

export { ItemPromotion };