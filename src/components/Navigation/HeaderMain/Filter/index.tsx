import Image from "next/image";
import { useContext, useState } from "react";
import { FilterCategoryContext } from "../../../../store/FilterCategory";
import { LineSeparator, SearchButton } from "../../../common";

interface Props {
  handleOpenDetailedFilter: any,
}

const Filter = ({ handleOpenDetailedFilter }: Props) => {
  const [stateFilterCategory, setStateFilterCategory] = useContext(FilterCategoryContext)

  const handlesetFilterSelectionFirstLevel = (optionId: number) => {
    //@ts-ignore
    setStateFilterCategory({
      ...stateFilterCategory,
      filterSelectionFirstLevel: optionId,
    })
    handleOpenDetailedFilter(true)
  }
  return (
    <div className={`flex items-center custom-border rounded-full`}>
      <div className="px-4 cursor-pointer" onClick={() => handlesetFilterSelectionFirstLevel(1)}>
        <p>Anywhere</p>
      </div>
      <LineSeparator />
      <div className="px-4 cursor-pointer" onClick={() => handlesetFilterSelectionFirstLevel(2)}>
        <p>Any Week</p>
      </div>
      <LineSeparator />
      <div className="flex items-center pl-4 cursor-pointer" onClick={() => handlesetFilterSelectionFirstLevel(4)}>
        <p>Add guests</p>
      </div>
      <div>
        <SearchButton handleClick={() => handleOpenDetailedFilter(true)} />
      </div>
    </div>
  )
}

export default Filter;
