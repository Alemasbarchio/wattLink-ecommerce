import axios from "axios";
const name="enviarproback";
export const axiosInstance=axios.create({
    baseURL:"http://localhost:8080"
})

export class ProdutoService{
    listarTodos(){
        return axiosInstance.get("/api/products")
    }

    realizarLogin(email:string, password:string){
        return axiosInstance.post("/login",{email: email, password: password});
    }

    githubLogin(){
        return axiosInstance.get("/api/github")
    }

}