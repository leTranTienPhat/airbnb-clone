import Image from "next/image";
import bars from "../../../../../../public/assets/bars.png"
import userIcon from "../../../../../../public/assets/userIcon.png"

const Login = () => {
  return (
    <div className="flex items-center custom-border h-[50px] rounded-full cursor-pointer">
      <div className="w-4 h-4 mx-4">
        <Image src={bars} alt="nav-bar" />
      </div>
      <div className="w-8 h-8 mr-4">
        <Image src={userIcon} alt="user-icon" />
      </div>
    </div>
  )
}

export default Login;
