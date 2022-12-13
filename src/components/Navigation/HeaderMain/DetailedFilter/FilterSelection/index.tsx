import { filterOption } from "../../../../../constants/staticText";
import { Modal } from "../../../../common";

interface Props {
  isSelected?: boolean,
  filterOption: filterOption
  handleSelectFilter: any
  expandedSecondSelection?: boolean
  children: React.ReactElement;
}

const FilterSelection = ({ isSelected, filterOption, handleSelectFilter, expandedSecondSelection, children }: Props) => {
  return (
    <div className={`relative hover:bg-light-gray rounded-full p-6 cursor-pointer ${isSelected ? "selected" : ""} ${expandedSecondSelection ? "min-w-[240px]" : "min-w-[120px]"} min-h-[96px]`} onClick={() => handleSelectFilter(filterOption.id)}>
      <p>{filterOption.text}</p>
      <p className="text-text-inactive">{filterOption.subText}</p>
      {isSelected && children}
    </div>
  )
}

export default FilterSelection;
