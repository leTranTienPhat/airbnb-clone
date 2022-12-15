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

  const handleIncrease = (type: string) => {
    setStateFilterOption({
      ...stateFilterOption,
      filterGuest: {
        ...stateFilterOption.filterGuest,
        [type]: stateFilterOption.filterGuest[type] + 1
      }
    })
  }

  const increaseBasedOnAdult = (type: string) => {
    if (type !== "adults") {
      if (stateFilterOption.filterGuest.adults === 0) {
        setStateFilterOption({
          ...stateFilterOption,
          filterGuest: {
            ...stateFilterOption.filterGuest,
            adults: 1,
            [currentParam]: stateFilterOption.filterGuest[currentParam] + 1
          }
        })
      } else {
        handleIncrease(type)
      }
    } else {
      handleIncrease(type)
    }
  }

  const handleDecrease = (type: string) => {
    setStateFilterOption({
      ...stateFilterOption,
      filterGuest: {
        ...stateFilterOption.filterGuest,
        [type]: stateFilterOption.filterGuest[type] - 1
      }
    })
  }
  const decreaseBasedOnAdult = (type: string) => {
    if (stateFilterOption.filterGuest[type] > 0)
      if (type === "adults" && stateFilterOption.filterGuest.adults <= 1) {
        if (stateFilterOption.filterGuest.children + stateFilterOption.filterGuest.infants + stateFilterOption.filterGuest.pets > 0) {
          return;
        } else {
          handleDecrease(type)
        }
      } else {
        handleDecrease(type)
      }
  }

  const handleAdjustment = (action: string) => {
    if (action === "decrease") {
      decreaseBasedOnAdult(currentParam)
    }
    if (action === "increase") {
      increaseBasedOnAdult(currentParam, action)
    }
  }

  return (
    <div className="flex w-[300px] justify-between bottom-border py-4">
      <div>
        <p>{guest.text}</p>
        <p>{guest.subText}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center w-8 h-8 border-[1px] border-text-active rounded-full" onClick={() => handleAdjustment("decrease")}>
          <p>-</p>
        </div>
        <p>{stateFilterOption.filterGuest[currentParam]}</p>
        <div className="flex justify-center items-center w-8 h-8 border-[1px] border-text-active rounded-full" onClick={() => handleAdjustment("increase")}>
          <p>+</p>
        </div>
      </div>
    </div>
  )
}

export default GuestsAdjustment;
