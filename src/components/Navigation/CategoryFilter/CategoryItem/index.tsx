import Image from "next/image";
import { Category } from "../../../../mockDatabase/categories";

interface Props {
  category: Category
}
const CategoryItem = ({ category }: Props) => {
  return (
    <div className="flex flex-col whitespace-nowrap	 items-center text-center cursor-pointer">
      <div className="w-8 h-8">
        <Image src={category.icon} alt={`${category.text}-icon`} />
      </div>
      <p>{category.text}</p>
    </div>
  )
}

export default CategoryItem;
