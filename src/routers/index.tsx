import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import {ItemDetailContainer} from '../components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../components/CartWidget/Cart'
import { LoginUser } from '../pages/Login/login'
import { ProdutosPage } from '../pages/produtos/produtos'
import { AdminCreateProduct } from '../pages/Login/adminCreateProducts'





const Routers=()=>{
    

return(
<BrowserRouter>
    <Routes>
        <Route  path='/'element={<Home/>} />
        <Route path="/item-detail/:name" element={<ItemDetailContainer/> } />
        <Route path='/carrinho/' element={<Cart/>}/>
        <Route path='/login/' element={<LoginUser/>}/>
        <Route path='/produtos/' element={<ProdutosPage/>}/>
        <Route path="/admin" element={<AdminCreateProduct/>}/>
                
    </Routes>
</BrowserRouter>


)

}
export {Routers}