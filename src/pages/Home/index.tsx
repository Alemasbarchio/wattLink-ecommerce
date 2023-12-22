
import { LogoContents } from '../../components/ContentsLogo';
import { Footer } from '../../components/Footer/footer';
import { ProdList } from '../../components/ItemListContainer/ListProduct';
import { NavBar } from '../../components/navbar/navbar';
import { useProductCart } from '../../context/cartContext';

function Home() {
  const{products}=useProductCart();
  return (

    <div className='text-center flex flex-col gap-5'>
      <NavBar />
      <LogoContents />
      <ProdList greeting='Produtos do carrinho' />
      {products.length!=0?<Footer/>:null}
      
     
      
          
    </div>
  );
}

export {Home};
