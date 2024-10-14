import { CgAddR } from 'react-icons/cg'

const Navbar = ({ isOpen, setIsOpen, setMode }) => {
  return (
    <div className="flex items-center justify-between px-10 py-3 bg-slate-100">
      <button
        onClick={() => {
          setMode('add')
          setIsOpen(!isOpen)
        }}
        className="flex justify-center items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 duration-300"
        type="button"
      >
        <CgAddR className="w-6 h-6" />
        <span className="text-lg">New Note</span>
      </button>
    </div>
  )
}
export default Navbar
