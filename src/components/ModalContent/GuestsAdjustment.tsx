// @ts-nocheck

import { useContext } from "react";
import { guestsType } from "../../constants/staticText";
import { FilterContext } from "../../store/FilterOption";
import { LineSeparator } from "../common";

interface Props {
  guest: guestsType
}

const GuestsAdjustment = ({ guest }: Props) => {
  const [stateFilterOption, setStateFilterOption] = useContext(FilterContext)
  let currentParam = ""

  switch (guest.id) {
    case 1:
      currentParam = "adults";
      break;
    case 2:
      currentParam = "children";
      break;
    case 3:
      currentParam = "infants";
      break;
    case 4:
      currentParam = "pets";
      break;
  }

  const handleAdjustment = (value: number, action: string) => {
    if (action === "decrease" && value > 0) {
      setStateFilterOption({
        ...stateFilterOption,
        filterGuest: {
          ...stateFilterOption.filterGuest,
          [currentParam]: value - 1
        }
      })
    }
    if (action === "increase") {
      // @ts-ignore
      setStateFilterOption({
        ...stateFilterOption,
        filterGuest: {
          ...stateFilterOption.filterGuest,
          [currentParam]: value + 1
        }
      })
    }
  }

  return (
    <div className="flex w-[300px] justify-between bottom-border py-4">
      <div>
        <p>{guest.text}</p>
        <p>{guest.subText}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center w-8 h-8 border-[1px] border-text-active rounded-full" onClick={() => handleAdjustment(stateFilterOption.filterGuest[currentParam], "decrease")}>
          <p>-</p>
        </div>
        <p>{stateFilterOption.filterGuest[currentParam]}</p>
        <div className="flex justify-center items-center w-8 h-8 border-[1px] border-text-active rounded-full" onClick={() => handleAdjustment(stateFilterOption.filterGuest[currentParam], "increase")}>
          <p>+</p>
        </div>
      </div>
    </div>
  )
}

export default GuestsAdjustment;
