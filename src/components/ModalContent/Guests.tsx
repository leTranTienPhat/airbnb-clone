import { guests } from "../../constants/staticText";
import GuestsAdjustment from "./GuestsAdjustment";

const Guests = () => {
  return (
    <div className="">
      {guests.map(guest => {
        return (
          <div key={guest.id}>
            <GuestsAdjustment guest={guest} />
          </div>
        )
      })}
    </div>
  )
}

export default Guests;
