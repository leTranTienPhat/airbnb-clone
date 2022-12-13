import Image from "next/image";
import searchIcon from "../../../public/assets/search-icon.png"

interface Props {
  text?: string,
  handleClick: any
}

const SearchButton = ({ text = "", handleClick }: Props) => {
  return (
    <div className="flex items-center text-white-basic font-bold gap-2 h-9 bg-main-color p-2 rounded-full m-2 cursor-pointer" onClick={handleClick}>
      <Image src={searchIcon} alt="search-icon" className="w-5 h-5" />
      {text && <p>{text}</p>}
    </div>
  )
}

export default SearchButton;
