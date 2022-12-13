interface Props {
  children: React.ReactElement
}

const Modal = ({ children }: Props) => {
  return (
    <div className="absolute top-[110px] bg-white-basic min-h-[300px] p-8 z-10 rounded-3xl shadow-xl">
      {children}
    </div>
  )
}

export default Modal;
