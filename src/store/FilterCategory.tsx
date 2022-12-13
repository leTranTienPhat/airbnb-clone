import React, { useState } from "react";

interface Props {
  children: React.ReactElement;
}

interface filterCategoryType {
  filterSelectionFirstLevel: Number,
  filterSelectionTravelType: Number
}

interface filterCategoryContextType {
  stateFilterCategory: filterCategoryType,
  setStateFilterCategory: React.Dispatch<React.SetStateAction<filterCategoryType>>
}

const filterCategory: filterCategoryType = {
  //0: Unselected | 1: Anywhere | 2: Anyweek | 4: Add guests
  filterSelectionFirstLevel: 0,

  //1: Stays | 2: Experiences
  filterSelectionTravelType: 1
};

const FilterCategoryContext = React.createContext([{}, () => { }]);

const FilterCategoryProvider = ({ children }: Props) => {
  const [stateFilterCategory, setStateFilterCategory] = useState<filterCategoryType>(filterCategory);

  return (
    <FilterCategoryContext.Provider value={[stateFilterCategory, setStateFilterCategory]}>
      {children}
    </FilterCategoryContext.Provider>
  );
}

export { FilterCategoryContext, FilterCategoryProvider };