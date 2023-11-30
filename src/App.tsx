import './App.css'
import { LogoContents } from './components/ContentsLogo';
import { ProdList } from './components/ItemListContainer/ListProduct';
import { NavBar } from './components/navbar/navbar';
import { useState, useEffect } from "react";

interface IProducts {
  id: string;
  description: string;
  stock: number;
  name: string;

}





function App() {
  /* EXEMPLO AULA 6 PROMISSE
  
  const [listRepo, setListRepo] = useState<string[]>();
  const getListRepo = (): Promise<IProducts[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            description: 'asdadsa',
            id: '1',
            name: 'adasdas',
            stock: 2
          },
          {
            description: 'asdadsa',
            id: '2',
            name: 'adasdas',
            stock: 3
          },
          {
            description: 'asdadsa',
            id: '3',
            name: 'adasdas',
            stock: 20
          },
        ])
        // reject({
        //   message: 'Ops tivemos um erro! '
        // });
      }, 5000)
      
    })
  }

  useEffect(() => {

    getListRepo().then(resp => {
      console.log('then', resp);
    }).catch((erro) => {
      console.log('Deu ruim', erro.message);
    }).finally(() => {

    })
  }, [])
*/
  return (

    <div className="App">
      <NavBar />
      <LogoContents />
      <ProdList greeting='Produtos do carrinho' />
      
    </div>
  );
}

export default App;
