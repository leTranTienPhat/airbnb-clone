import Image from "next/image";
import filterIcon from "../../../../../public/assets/filter-icon.png"
import searchIcon from "../../../../../public/assets/search-icon-black.png"

const MobileNavigator = () => {
  return (
    <div className="flex md:hidden custom-border rounded-full w-full items-center justify-center gap-2 p-2 mb-4">
      <div className="p-2">
        <Image src={searchIcon} alt="filter-icon" className="w-4" />
      </div>
      <div className="flex-1">
        <p>Where to?</p>
        <p className="text-text-inactive">Anywhere • Anyweek • Add guests</p>
      </div>
      <div className="p-2 custom-border rounded-full">
        <Image src={filterIcon} alt="filter-icon" className="w-4" />
      </div>
    </div>
  )
}

export default MobileNavigator;
