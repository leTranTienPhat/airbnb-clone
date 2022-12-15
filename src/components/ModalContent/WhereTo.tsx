import Image from "next/image";
import { useContext } from "react";
import { region } from "../../constants/region";
import { FilterContext } from "../../store/FilterOption";

const WhereTo = () => {
  const [stateFilterOption, setStateFilterOption] = useContext(FilterContext)

  const handleSelectRegion = (region: string) => {
    // @ts-ignore
    setStateFilterOption({
      ...stateFilterOption,
      filterRegionSelection: region
    })
  }

  return (
    <div className="">
      <p className="pb-4 font-bold">Search by Region</p>
      <div className="flex gap-8 flex-wrap w-[520px]">
        {region.map((area) => {
          return (
            <div key={area.id} className="w-[150px] flex-wrap" onClick={() => handleSelectRegion(area.value)}>
              <Image src={area.image} alt={area.text} className="w-[200px]" />
              {area.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WhereTo;
