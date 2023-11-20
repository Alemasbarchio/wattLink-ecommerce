interface Props {
greeting:string;

}

const ProdList=({greeting}:Props)=>{


    return(
    <div className="w-screen h-96 bg-white flex flex-col gap-10 justify-start items-center">
      <h1 className="text-green-800 font-extrabold" >{greeting}</h1>
         
    </div>

    )
}

export {ProdList}