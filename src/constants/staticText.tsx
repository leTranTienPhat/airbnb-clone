import DatePicker from "../components/ModalContent/CustomDatePicker";
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

export interface guestsType {
  id: number,
  text: string,
  subText: string,
}

export const guests: guestsType[] = [
  {
    id: 1,
    text: "Adults",
    subText: "Ages 13 or above",
  },
  {
    id: 2,
    text: "Children",
    subText: "Ages 2-12",
  },
  {
    id: 3,
    text: "Infants",
    subText: "Under 2",
  },
  {
    id: 4,
    text: "Pets",
    subText: "Bring a service animal?",
  },
]