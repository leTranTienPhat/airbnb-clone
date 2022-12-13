import Login from "./Login";
import worldIcon from "../../../../../public/assets/world-icon.png"
import Image from "next/image";

const RightMenu = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-text-active">Airbnb your home</p>
        <div className="w-5  mx-4">
          <Image src={worldIcon} alt="world-icon" />
        </div>
        <Login />
      </div>
    </div>
  )
}

export default RightMenu;
