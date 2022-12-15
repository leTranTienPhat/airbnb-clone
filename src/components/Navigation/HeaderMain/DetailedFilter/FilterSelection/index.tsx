// @ts-nocheck
import { useContext, useState } from "react";
import { filterOption } from "../../../../../constants/staticText";
import { FilterContext } from "../../../../../store/FilterOption";

interface Props {
  isSelected?: boolean,
  filterOption: filterOption
  handleSelectFilter: any
  expandedSecondSelection?: boolean
  children: React.ReactElement;
}

const FilterSelection = ({ isSelected, filterOption, handleSelectFilter, expandedSecondSelection, children }: Props) => {
  const [stateFilterOption, setStateFilterOption] = useContext(FilterContext)
  let currentParam = ""

  switch (filterOption.id) {
    case 1:
      currentParam = "filterRegionSelection";
      break;
    case 2:
      currentParam = "filterStartDateSelection";
      break;
    case 3:
      currentParam = "filterEndDateSelection";
      break;
    case 4:
      currentParam = "filterGuest";
      break;
  }

  const checkEmpty = () => {
    const { adults, children, infants, pets } = stateFilterOption.filterGuest
    if (adults + children + infants + pets > 0)
      return `${adults + children ? `${adults + children} guest${adults + children > 1 ? "s" : ""}` : ""} ${infants ? `${infants} infant${infants > 1 ? "s" : ""}` : ""} ${pets ? `${pets} pet${pets > 1 ? "s" : ""}` : ""}`
    else return filterOption.subText
  }

  return (
    <div
      className={`relative hover:bg-light-gray rounded-full p-6 cursor-pointer ${isSelected ? "selected" : ""} ${expandedSecondSelection ? "min-w-[240px]" : "min-w-[120px]"} min-h-[96px]`}
      onClick={() => handleSelectFilter(filterOption.id)}>
      <p>{filterOption.text}</p>
      {/* <p className="text-text-inactive">{filterOption.subText}</p> */}
      {currentParam === "filterGuest"
        ?
        <p className="text-text-inactive">{checkEmpty()}</p>
        :
        <p className="text-text-inactive">{stateFilterOption[currentParam] ? stateFilterOption[currentParam] : filterOption.subText}</p>
      }
      {isSelected && children}
    </div >
  )
}

export default FilterSelection;
