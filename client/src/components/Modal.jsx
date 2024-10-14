import { AiOutlineClose } from 'react-icons/ai'
import AddNoteForm from './AddNoteForm'
import EditNoteForm from './EditNoteForm'
import Delete from './Delete'

const Modal = ({ isOpen, setIsOpen, mode, data }) => {
  let modalTile = ''
  let element = ''

  if (mode == 'edit') {
    modalTile = 'Edit note'
    element = <EditNoteForm isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
  }
  if (mode == 'add') {
    modalTile = 'New note'
    element = <AddNoteForm isOpen={isOpen} setIsOpen={setIsOpen} />
  }
  if (mode == 'delete') {
    element = <Delete isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
  }

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start justify-center pt-20 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative mx-2">
        {/* Close Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-4">{modalTile}</h2>
        {element}
      </div>
    </div>
  )
}

export default Modal
