import { PiWarningCircle } from 'react-icons/pi'
import toast from 'react-hot-toast'
import useStore from '../store/useStore'

const Delete = ({ isOpen, setIsOpen, data }) => {
  const { deleteNote } = useStore()

  return (
    <div className="flex flex-col items-center gap-2">
      <PiWarningCircle className="w-32 h-32 text-red-500" />
      <span className="text-3xl text-center font-medium">
        Are you sure you want to delete this note?
      </span>
      <span className="text-xl text-center mt-3">
        You cannot undo this action.
      </span>
      <div className="w-full flex justify-end gap-2 mt-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 w-full bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={async () => {
            const { success, message } = await deleteNote(data?._id)
            if (success) {
              toast.success(message)
              setIsOpen(!isOpen)
            } else toast.error(message)
          }}
          className="px-4 py-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default Delete
