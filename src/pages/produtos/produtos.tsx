import { LogoContents } from "../../components/ContentsLogo";
import { Footer } from "../../components/Footer/footer";
import { MainContent } from "../../components/MainContent/mainContent";
import { NavBar } from "../../components/navbar/navbar";


const ProdutosPage=()=>{

    return (

        <div className='text-center flex flex-col gap-2'>
         
         <NavBar/>
          <LogoContents />
                           
          <Footer/>
               
                        
        </div>
      );



}

export {ProdutosPage};