import logo from '../../assets/img/disjuntor_tripolar.png';
const MainContent=()=>{

return(
    <div className="flex justify-center">
        <div className="bg-gradient-to-b from-green-800 to-green-950 h-128 w-128 gap-10 flex flex-col justify-stretch">
        <h1 className="text-white text-5xl font-title font-semibold">Cabos de Força</h1>
            <div className=' flex'>
                 <img className="w-64 " 
                src={logo}
                alt="logo" />
                <div className='flex justify-start pt-48' >
                    <h3 className='text-4xl text-black '>10 a 20 Ampéres</h3>
                </div>
        
            </div>
            
        </div>
            
    
    </div>
)

}
export {MainContent};