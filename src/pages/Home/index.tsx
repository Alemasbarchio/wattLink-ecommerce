
import { LogoContents } from '../../components/ContentsLogo';
import { Footer } from '../../components/Footer/footer';
import { NavBar } from '../../components/navbar/navbar';
import { useProductCart } from '../../context/cartContext';
import { MainContent } from '../../components/MainContent/mainContent';
import { ItemPromotion} from '../../components/ItemListContainer/ItemPromotion';
import { ProdList } from '../../components/ItemListContainer/ListProduct';


function Home() {
 const {products}=useProductCart();

  return (

    <div className='text-center flex flex-col gap-2'>
     
      <NavBar/>
      <LogoContents />
      <MainContent/>
      
      <ProdList greeting=''/>
      <Footer/>
      
      
      
          
    </div>
  );
}

export {Home};
