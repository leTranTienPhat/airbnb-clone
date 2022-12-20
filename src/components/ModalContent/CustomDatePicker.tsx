//@ts-nocheck
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingDatesContext } from "../../store/BookingDates";
import { FilterContext } from "../../store/FilterOption";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CustomDatePicker = () => {
  const [stateFilterContext, setStateFilterContext] = useContext(FilterContext)
  console.log(stateFilterContext);

  const [chooseDateSelected, setChooseDateSelected] = useState(true)
  const [isFlexible, setIsFlexible] = useState(false)

  const switchToChooseDate = () => {
    setChooseDateSelected(true)
    setIsFlexible(false)
  }

  const switchToFlexible = () => {
    setChooseDateSelected(false)
    setIsFlexible(true)
  }

  const handleChooseDate = (dates: Object) => {
    const [start, end] = dates

    setStateFilterContext({
      ...stateFilterContext,
      filterStartDateSelection: null,
      filterEndDateSelection: null,
    })
  }

  return (
    <div className="flex flex-col items-center justify- min-w-[600px]">
      <div className="flex items-center justify-center p-1 mb-4 bg-gray rounded-full">
        <div className={`hover:bg-light-gray rounded-full py-2 px-6 cursor-pointer ${chooseDateSelected ? "selected" : ""}`} onClick={switchToChooseDate}>
          <p>Choose dates</p>
        </div>
        <div className={`hover:bg-light-gray rounded-full py-2 px-6 cursor-pointer ${isFlexible ? "selected" : ""}`} onClick={switchToFlexible}>
          <p>I&#39;m flexible</p>
        </div>
      </div>
      {chooseDateSelected &&
        <div className="flex">
          <DatePicker
            selected={stateFilterContext.filterStartDateSelection}
            onChange={handleChooseDate}
            startDate={stateFilterContext.filterStartDateSelection}
            endDate={stateFilterContext.filterEndDateSelection}
            inline
            selectsRange
            monthsShown={2}
          />
        </div>}
      {isFlexible &&
        <div>
          <p>Flexible</p>
        </div>}
    </div>
  )
}

export default CustomDatePicker;
