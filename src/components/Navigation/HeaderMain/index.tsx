import Image from "next/image";
import Filter from "./Filter";
import airbnbLogo from "../../../../public/assets/airbnb-logo.png"
import RightMenu from "./RightMenu";
import { useContext, useRef, useState } from "react";
import DetailedFilter from "./DetailedFilter";
import { FilterContext } from "../../../store/FilterOption";
import { FilterCategoryContext } from "../../../store/FilterCategory";


const HeaderMain = () => {
  const [openDetailedFilter, setOpenDetailedFilter] = useState<boolean>(false);

  const filterRef = useRef(null)
  // const [filterOption, setFilterOption] = useContext(FilterContext)
  // const [stateFilterCategory, setStateFilterCategory] = useContext(FilterCategoryContext)

  const handleOpenDetailedFilter = (isOpenFilter: boolean) => {
    setOpenDetailedFilter(isOpenFilter)
  }

  return (
    <div className="hidden md:flex bottom-border">
      <div className="flex justify-between w-full padding-container py-6">
        <div className="w-[110px]">
          <Image src={airbnbLogo} alt="airbnb-logo" />
        </div>
        <div ref={filterRef}>
          {openDetailedFilter
            ?
            <DetailedFilter handleOpenDetailedFilter={handleOpenDetailedFilter} openDetailedFilter={openDetailedFilter} />
            :
            <Filter handleOpenDetailedFilter={handleOpenDetailedFilter} />
          }
        </div>
        <RightMenu />
      </div>
    </div>
  )
}

export default HeaderMain;
