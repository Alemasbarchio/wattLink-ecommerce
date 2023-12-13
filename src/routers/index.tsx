import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import {ItemDetailContainer} from '../components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../components/CartWidget/Cart'





const Routers=()=>{
    

return(
<BrowserRouter>
    <Routes>
        <Route  path='/'element={<Home/>} />
        <Route path="/item-detail/:name" element={<ItemDetailContainer/> } />
        <Route path='/carrinho/' element={<Cart/>}/>
    </Routes>
</BrowserRouter>


)

}
export {Routers}