
import { LogoContents } from '../../components/ContentsLogo';
import { ProdList } from '../../components/ItemListContainer/ListProduct';
import { NavBar } from '../../components/navbar/navbar';

function Home() {
  
  return (

    <div className='text-center'>
      <NavBar />
      <LogoContents />
      <ProdList greeting='Produtos do carrinho' />
          
    </div>
  );
}

export {Home};
