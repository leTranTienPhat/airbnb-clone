import Image from "next/image";
import { useRef } from "react";
import { categories } from "../../../mockDatabase/categories";
import CategoryItem from "./CategoryItem";
import NavigateButton from "./NavigateButton";
import filterIcon from "../../../../public/assets/filter-icon.png"
import MobileNavigator from "./MobileNavigator";

const CategoryFilter = () => {
  const categoryElement = useRef(null)

  const handleScroll = (scrollOffset: any) => {
    //@ts-ignore
    categoryElement.current.scrollLeft += scrollOffset;
  };


  return (
    <div className="flex md:padding-container my-6 gap-10">
      <div className="relative">

        <MobileNavigator />

        <div ref={categoryElement} className="relative flex w-screen md:w-[calc(100vw-300px)] gap-10 overflow-x-scroll scroll-smooth scrollbar-hide px-0 md:px-20">
          {categories.map((category) => {
            return (
              <CategoryItem key={category.id} category={category} />
            )
          })}
        </div>
        <div className="hidden md:flex absolute w-full h-full items-center top-0 pointer-events-none">
          <NavigateButton isRevert={false} handleScroll={handleScroll} />
          <NavigateButton isRevert={true} handleScroll={handleScroll} />
        </div>

      </div>

      <div className="hidden md:flex custom-border w-[300px] items-center justify-center gap-2 rounded-xl">
        <Image src={filterIcon} alt="filter-icon" className="w-6" />
        <p>
          Filter
        </p>
      </div>
    </div>
  )
}

export default CategoryFilter;
