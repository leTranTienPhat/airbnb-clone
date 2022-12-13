import Image from "next/image";
import { region } from "../../constants/region";

const WhereTo = () => {
  return (
    <div className="flex gap-8 w-full">
      {region.map((area) => {
        return (
          <div key={area.id} className="">
            <Image src={area.image} alt={area.text} />
            {area.text}
          </div>
        )
      })}
    </div>
  )
}

export default WhereTo;
