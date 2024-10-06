import { BsPlusCircleFill } from 'react-icons/bs'
import Note from './Note'

const Sidebar = ({ notes, setNotes }) => {
  return (
    <div className="flex sm:flex-col fixed w-full bg-white sm:h-screen items-center gap-10 sm:max-w-[fit-content] sm:py-10 py-5 px-5 border-b sm:border-r border-gray-100">
      <h1 className="text-xl font-semibold">NotesApp</h1>
      <BsPlusCircleFill
        className="w-10 h-10 cursor-pointer hover:scale-75 duration-200"
        onClick={() => setNotes(notes.concat(<Note key={notes.length} />))}
      />
    </div>
  )
}
export default Sidebar
