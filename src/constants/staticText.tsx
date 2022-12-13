import DatePicker from "../components/ModalContent/DatePicker";
import Guests from "../components/ModalContent/Guests";
import WhereTo from "../components/ModalContent/WhereTo";

export interface filterOption {
  id: number,
  text: string,
  subText: string,
  modalContent: React.ReactElement;
}

export const filterMenuStay: filterOption[] = [
  {
    id: 1,
    text: "Where to?",
    subText: "Search destinations",
    modalContent: <WhereTo />
  },
  {
    id: 2,
    text: "Check in",
    subText: "Add dates",
    modalContent: <DatePicker />
  },
  {
    id: 3,
    text: "Check out",
    subText: "Add dates",
    modalContent: <DatePicker />
  },
  {
    id: 4,
    text: "Who",
    subText: "Add guests",
    modalContent: <Guests />

  },
]

export const filterMenuExperience: filterOption[] = [
  {
    id: 1,
    text: "Where to?",
    subText: "Search destinations",
    modalContent: <WhereTo />

  },
  {
    id: 2,
    text: "Date",
    subText: "Add dates",
    modalContent: <DatePicker />
  },
  {
    id: 4,
    text: "Who",
    subText: "Add guests",
    modalContent: <Guests />

  },
]