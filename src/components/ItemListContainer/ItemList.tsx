import { Item } from './Item';

interface ItemListProps {
  items: {
    id?: number;
    name: string;
    price: number;
    imgProduct: string;
    qtdStock: number;
  }[];

}

const ItemList = ({ items }: ItemListProps) => {

  
  return (
    <div className='flex flex-wrap gap-10 justify-center'>
      {items.map((item, index) => (
        <Item key={index} {...item} />

      ))}
    </div>
  );
};

export { ItemList };
