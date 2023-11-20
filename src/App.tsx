import './App.css'
import { LogoContents } from './components/contentsLogo';
import { ProdList } from './components/listcontainer/listproduct';
import { NavBar } from './components/navbar/navbar';


function App() {


  return (
    <div className="App">
      <NavBar/>
      <LogoContents/>
      <ProdList greeting='Produtos do carrinho'/>
     
      
    </div>
  );
}

export default App;
