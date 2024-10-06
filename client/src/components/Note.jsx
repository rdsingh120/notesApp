import { MdModeEditOutline } from 'react-icons/md'
import { AiTwotoneSave } from 'react-icons/ai'
import { useState } from 'react'

const Note = () => {
  const [save, setSave] = useState(false)
  return (
    <article
      className="note flex flex-col gap-3
     w-80 h-80 rounded-3xl overflow-hidden bg-[#fff740] hover:scale-[.99] duration-200"
    >
      <textarea
        className="outline-none text-lg font-semibold rounded-xl w-full h-60
        resize-none bg-transparent p-5"
        name=""
        id=""
      ></textarea>
      <div className="flex justify-between mx-7 items-center">
        <span className="text-sm font-semibold text-gray-800"></span>
        <button
          className="text-black text-4xl cursor-pointer"
          onClick={() => setSave(!save)}
        >
          {save ? <MdModeEditOutline /> : <AiTwotoneSave />}
        </button>
      </div>
    </article>
  )
}
export default Note
