import React, { useState } from "react";

interface Props {
  children: React.ReactElement;
}

interface filterOptionsType {
  filterRegionSelection: number,
  filterStartDateSelection: number,
  filterEndDateSelection: number,
  filterGuest: {
    adults: number,
    children: number,
    infants: number,
    pets: number
  }
}
const filterOptions: filterOptionsType = {
  filterRegionSelection: 0,
  filterStartDateSelection: 0,
  filterEndDateSelection: 0,
  filterGuest: {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  }
};

const FilterContext = React.createContext([{}, () => { }]);

const FilterOptionProvider = ({ children }: Props) => {
  const [stateFilterOption, setStateFilterOption] = useState<filterOptionsType>(filterOptions);

  return (
    <FilterContext.Provider value={[stateFilterOption, setStateFilterOption]}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterOptionProvider };