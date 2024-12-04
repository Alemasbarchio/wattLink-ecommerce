import { useEffect, useState,ChangeEvent, FormEvent } from "react";
import { ProdutoService } from '../../service/ProdutoService';
import { NavBar } from "../../components/navbar/navbar";
import { LogoContents } from "../../components/ContentsLogo";
import { Footer } from "../../components/Footer/footer";
import { useNavigate } from 'react-router-dom';
import { useTokenContext } from "../../context/UserContext";
import { Loading } from "../../components/Loading/loading";



const produtoServive = new ProdutoService();
const LoginUser = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const{user,setUser}= useTokenContext();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  
 

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
     authLogin();
     
};

const authLogin= async()=>{
  
  const response=  await produtoServive.realizarLogin(email,password);

 
  try {
    
    setTimeout(() => {
    
     
   if(response){
    setUser(response.data);
    if(response.data.role=="admin"){
      navigate('/admin');

    }
      
    else{ navigate("/")}

       }
      
      }, 1000);
     

 } catch (error) {
    console.log("erro de login" + error)
    
  }
  setIsLoading(true)
 
  
  }
  const loginGitHub=async()=>{
    try {
    
      const response= await produtoServive.githubLogin();
      
    } catch (error) {
      console.log("erro de login com o github")
      
    }
  }

const handleGithubLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  // Abre uma nova janela para login com GitHub
loginGitHub();
};

  /*
  useEffect(() => {

    const onMount = async () => {
      try {
        const response= await produtoServive.realizarLogin();
        setLoginResponse(response.data);
       
        
      } catch (error) {
       }
    
    }
    if(callLogin){
      onMount();
      setCallLogin(false);
    }
    

  }, [callLogin]);
*/
const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;

  switch (name) {
      case "email":
          setEmail(value);
          break;
      
      case "password":
          setPassword(value);
          break;
      default:
          break;
  }
};

useEffect(() => {
 
}, [user]);

  return (
    
  <section>
   
   {isLoading && <Loading loading={true} />}
    <NavBar/>
    <LogoContents/>
   
    <div className=" pt-5 w-full flex flex-col items-center gap-5">
      <div className="w-4/5 border-b-2 pb-5"> 
      <h1 className="font-subtitle font-semibold">  FAÇA SEU LOGIN</h1>
      </div>
    
        <div className="  border-gray-800 flex justify-start gap-32 w-4/5 h-3/4">
                  <form  onSubmit={handleSubmit} className=" h-72 pt-4 relative w-1/2 flex flex-col gap-3 border-r-2 border-gray-400">
                       
            <div className="mb-2">
              <h1 className="pb-4 font-subtitle font-semibold">JÁ SOU CADASTRADO</h1>
              <input
              name="email"
              onChange={handleInputChange}
                type="text"
                placeholder="Digite seu email"
                className="w-4/5 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:border-green-600"
              />
            </div>

            <div>
              <input
              name="password"
              onChange={handleInputChange}
               type="text"
                placeholder="Digite sua senha"
                className="w-4/5 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:border-green-600 "
              />
            </div>
            
            <div className=" flex justify-start flex-wrap gap-x-16">
              <button type="submit"
                className="w-1/3  bg-green-900 text-black border p-2 rounded-lg hover:bg-green-600 hover:text-white"
              > Login </button>
              <button type="button" onClick={handleGithubLogin}
                className="w-1/3 bg-green-900 text-black border p-2 rounded-lg hover:bg-green-600 hover:text-white"
              > Entrar com GitHub </button>
              
              
            </div>
            
            
          </form>
          <div className="pt-10 flex flex-col gap-10">
            <h1 className="font-subtitle font-semibold">QUERO ME CADASTRAR</h1>
          <button className="w-full bg-green-900 text-black border p-2 rounded-lg hover:bg-green-600 hover:text-white"> Cadastrar </button>

          </div>
          
        </div>
        
        </div>
        <Footer/>
  </section>
  )

}

export { LoginUser }