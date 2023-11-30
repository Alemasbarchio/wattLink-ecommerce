
import { ItemList } from "./ItemList";


interface Props {
  greeting: string;

}

  const ProdList = ({ greeting }: Props) => {

  return (
    <div className="w-full  bg-slate-50 flex flex-col gap-10">
      <h1>{greeting}</h1>
       <ItemList/>
      
    </div>

  )
}

export { ProdList }