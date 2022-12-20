import { useContext, useState } from "react";
import { filterMenuExperience, filterMenuStay } from "../../../../constants/staticText";
import { FilterCategoryContext } from "../../../../store/FilterCategory";
import { Modal, SearchButton } from "../../../common";
import FilterSelection from "./FilterSelection";

interface Props {
  openDetailedFilter: boolean
  handleOpenDetailedFilter: any
}

const DetailedFilter = ({ openDetailedFilter, handleOpenDetailedFilter }: Props) => {
  const [stateFilterCategory, setStateFilterCategory] = useContext(FilterCategoryContext)

  const handleSelectFilter = (optionId: number) => {
    //@ts-ignore
    setStateFilterCategory({
      ...stateFilterCategory,
      filterSelectionFirstLevel: optionId
    });
  }

  const handleSelectTravelType = (optionId: number) => {
    //@ts-ignore
    if (stateFilterCategory.filterSelectionFirstLevel === 3 && optionId === 2) {
      //@ts-ignore
      setStateFilterCategory({
        filterSelectionFirstLevel: 2,
        filterSelectionTravelType: optionId
      })
    }
    else
      //@ts-ignore
      setStateFilterCategory({
        ...stateFilterCategory,
        filterSelectionTravelType: optionId
      })
  }

  return (
    <div className={`${openDetailedFilter ? "" : "hidden"}`}>
      <div className="flex justify-between gap-4 mb-4">
        {/* @ts-ignore */}
        <div className={`${stateFilterCategory.filterSelectionTravelType === 1 && "text-main-color"} cursor-pointer`} onClick={() => handleSelectTravelType(1)}>
          <p>Stays</p>
        </div>
        {/* @ts-ignore */}
        <div className={`${stateFilterCategory.filterSelectionTravelType === 2 && "text-main-color"} cursor-pointer`} onClick={() => handleSelectTravelType(2)}>
          <p>Experiences</p>
        </div>
        <p>Online Experiences</p>
      </div>
      <div className="flex bg-gray rounded-full items-center ">
        {/* @ts-ignore */}
        {stateFilterCategory.filterSelectionTravelType === 2
          ?
          filterMenuExperience.map((option) => {
            return (
              <FilterSelection
                key={option.id}
                //@ts-ignore
                isSelected={stateFilterCategory.filterSelectionFirstLevel === option.id ? true : false}
                filterOption={option}
                handleSelectFilter={handleSelectFilter}
                expandedSecondSelection={option.id === 2}>
                <Modal>
                  {option.modalContent}
                </Modal>
              </FilterSelection>
            )
          })
          :
          filterMenuStay.map((option) => {
            return (
              <FilterSelection
                key={option.id}
                //@ts-ignore
                isSelected={stateFilterCategory.filterSelectionFirstLevel === option.id ? true : false}
                filterOption={option}
                handleSelectFilter={handleSelectFilter}>
                {<Modal>
                  {option.modalContent}
                </Modal>}
              </FilterSelection>
            )
          }
          )}
        <SearchButton text="SEARCH" handleClick={() => handleOpenDetailedFilter(false)} />
      </div>
    </div>
  )
}

export default DetailedFilter;
