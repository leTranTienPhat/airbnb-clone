import { LineSeparator } from "../../common";

const HeaderPromotion = () => {
  return (
    <div className="hidden md:flex bg-light-gray dark:bg-main-color">
      <div className="flex justify-between w-full padding-container py-6">
        <div>
          <p className="font-bold text-1.5xl">Introducing our 2022 Winter Release</p>
        </div>
        <div className="flex items-center">
          <p className="text-sl text-text-inactive py-1 pr-4">[Video] Play the film</p>
          <LineSeparator />
          <p className="text-sl text-text-inactive py-1 pl-4">Explore what&#39;s new</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderPromotion;
