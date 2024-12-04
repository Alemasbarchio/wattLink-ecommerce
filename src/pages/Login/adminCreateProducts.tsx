
import { NavBar } from "../../components/navbar/navbar";
import { useTokenContext } from "../../context/UserContext";


const AdminCreateProduct=()=>{
    const{user}= useTokenContext();

    console.log(user);

    return(
   
        <NavBar/>
        
    );
}
export {AdminCreateProduct};