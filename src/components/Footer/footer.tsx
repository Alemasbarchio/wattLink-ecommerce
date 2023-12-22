import logo from '../../assets/img/logo-eletrica.png';
const Footer = () => {
    return (

        <div className="bg-gray-300 p-5 shadow-lg flex justify-evenly h-12  items-center w-full">

            <div>
                <img className="w-8" src={logo} alt="logo" />

            </div>
            <ul className="flex gap-5 cursor-pointer justify-center items-center">
               <li><span className='font-bold'>ale_maschio@hotmail.com</span> </li>
                 
            </ul>
            
        </div>

    )

}

export { Footer }