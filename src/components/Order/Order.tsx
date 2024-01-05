import { ChangeEvent, useState } from "react";
import { useProductCart } from "../../context/cartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";


interface openModal {
    isOpen: boolean;
    onClose: () => void;
}

const Order = ({ isOpen, onClose }: openModal) => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);



    const { cartProduts,setCartProduts } = useProductCart();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "email":
                setEmail(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        setIsLoading(true);
        if (!name || !phone || !email) {
           
            return;
        }
        else {
            setTimeout(() => {
            const items = cartProduts.map((product) => ({
                id: product.id,
                name: product.name,
                price: product.price,
            }));
            const totalPrice = cartProduts.reduce((accumulator, product) => accumulator = product.precoTotal, 0).toFixed(2);
            const currentDate = new Date().toISOString();
            const order = {
                buyer: { name, phone, email, },
                items,
                totalPrice,
                currentDate
            };
            const db=getFirestore();
            const ordersCollection=collection(db,'order');
            addDoc(ordersCollection,order);
            setIsLoading(false);
            onClose();
            setCartProduts([])

        },2000);
        }
        
        
       
    };
    const isFormValid = name && phone && email;
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="backdrop-blur-sm bg-white/30 p-8 rounded shadow-md relative flex flex-col gap-10">
                        <button
                            className="absolute bg-red-600 top-0 right-0 w-5 text-white hover:text-gray-800 focus:outline-none"
                            onClick={onClose}
                        >
                            X
                        </button>
                        {!isFormValid ? (
                            <h1 className="text-red-600 text-xl">Preencha todos os campos</h1>
                        ) : (
                            null
                        )}


                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                            placeholder="Digite seu nome"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:border-green-600"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={handleInputChange}
                            placeholder="Digite seu telefone"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:border-green-600"
                        />
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Digite seu email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:border-green-600"
                        />
                        <div className="flex">
                            <button
                                disabled={!isFormValid}
                                className={`w-28 bg-white text-black border p-2 rounded-lg hover:bg-green-900 hover:text-white 
                                ${isFormValid ? 'hover:opacity-75' : 'opacity-50 cursor-not-allowed'
                                    }`}
                                onClick={handleSubmit}
                            >
                                Confirmar
                            </button>
                            {isLoading &&<div className="w-full h-12 opacity-90 fixed left-0 ">
                                 <div className="rounded-full fixed right-16  w-12 h-12 border-b-8 border-green-600 animate-bounce">
                                     <h2 className="font-semibold">Processando... </h2></div></div>}
                        </div>
                    </div>

                </div>
            )}
        </>
    )

}

export { Order }