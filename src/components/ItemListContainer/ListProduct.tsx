
import { ItemList } from "./ItemList";


interface Props {
  greeting: string;

}

  const ProdList = ({ greeting }: Props) => {

  return (
      <div className="flex justify-center ">
        <div className="w-128 bg-gray-200 flex flex-col gap-2">
          <h1 className="text-4xl">{greeting}</h1>
          <ItemList/>
          
        </div>
    </div>
    )
  }

export { ProdList }