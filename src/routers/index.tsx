import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
const Routers=()=>{
    

return(
<BrowserRouter>
    <Routes>
        <Route  path='/'element={<Home/>} />
        <Route path="/item-detail/:id" element={<ItemDetailContainer/> } />
    </Routes>
</BrowserRouter>


)

}
export {Routers}