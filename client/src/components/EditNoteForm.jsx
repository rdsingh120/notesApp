import { useState } from 'react'
import { toast } from 'react-hot-toast'
import useStore from '../store/useStore'

const EditNoteForm = ({ isOpen, setIsOpen, data }) => {
  const { editNote } = useStore()
  const [note, setNote] = useState({
    title: data?.title,
    content: data?.content,
  })

  return (
    <form
      className="w-full max-w-lg mx-auto flex flex-col gap-2"
      onSubmit={async (e) => {
        e.preventDefault()
        const { success, message } = await editNote(data?._id, note)
        if (success) {
          toast.success(message)
          setIsOpen(!isOpen)
        } else toast.error(message)
      }}
    >
      <input
        type="text"
        name="title"
        value={note?.title}
        onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value })}
        placeholder="Give your note a title..."
        className="text-md bg-transparent border rounded-md w-full 
        text-gray-700 mr-3 py-2 px-4 focus:outline-none"
      />
      <textarea
        type="text"
        name="content"
        value={note?.content}
        onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value })}
        placeholder="Write your note..."
        className="text-md bg-transparent border rounded-md w-full min-h-40 resize-none
         scroll-auto text-gray-700 mr-3 py-2 px-4 focus:outline-none"
      ></textarea>
      <div className="w-full flex justify-end gap-2 mt-5">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 duration-300"
        >
          Save changes
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsOpen(!isOpen)
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditNoteForm
