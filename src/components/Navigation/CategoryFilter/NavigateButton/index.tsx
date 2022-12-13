import Image from "next/image";
import arrow from "../.././../../../public/assets/arrow.png"

interface Props {
  isRevert: boolean,
  handleScroll: any
}

const NavigateButton = ({ isRevert, handleScroll }: Props) => {
  return (
    <div className={`absolute flex items-center justify-between transparent-background h-full w-14  ${isRevert ? "rotate-180 right-0" : ""}`}>
      <button
        onClick={() => handleScroll(isRevert ? 300 : -300)}
        className={`flex justify-center items-center rounded-full border-[1px] w-8 h-8 bg-white pointer-events-auto `}>
        <Image src={arrow} alt="left-arrow" className="w-2" />
      </button>
    </div>
  )
}

export default NavigateButton;
