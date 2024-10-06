import { BsPlusCircleFill } from 'react-icons/bs'
import { FaCircle } from 'react-icons/fa6'

import Note from './Note'
import { colors } from '../../data'

const Sidebar = ({ notes, setNotes }) => {
  return (
    <div className="flex sm:flex-col flex-row-reverse max-sm:justify-between fixed w-full bg-white sm:h-screen items-center gap-10 sm:max-w-[fit-content] sm:py-10 py-5 px-5 border-b sm:border-r border-gray-100">
      <h1 className="text-xl font-semibold">NotesApp</h1>
      <div className="flex sm:flex-col  items-center justify-center gap-5 group">
        <BsPlusCircleFill
          className="w-10 h-10 cursor-pointer hover:scale-75 duration-200"
        />
        <div className="hidden sm:flex-col gap-3 group-hover:flex">
          {colors.map((color) => (
            <FaCircle
            key={color}
              size={18}
              style={{ color: color }}
              className="cursor-pointer hover:scale-150 transition-all duration-500"
              onClick={() =>
                setNotes((prevNotes) => [
                  ...prevNotes,
                  <Note key={prevNotes.length} color={color} />,
                ])
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Sidebar
