import { TiDelete } from 'react-icons/ti'
import { MdEditNote } from 'react-icons/md'
import { LuPin } from 'react-icons/lu'
import { LuPinOff } from 'react-icons/lu'
import { useState } from 'react'

const Note = ({ _id, title, content, isOpen, setIsOpen, setMode, setData }) => {
  const [pin, setPin] = useState(false)
  return (
    <div className="w-[400px] rounded-md overflow-hidden">
      <div className="flex justify-between items-center w-full bg-gray-300 p-2">
        <h1 className="text-lg">{title}</h1>
        <div className="flex justify-center items-center gap-1">
          <button onClick={() => setPin(!pin)}>
            {pin ? (
              <LuPinOff className="text-slate-500 w-5 h-5 hover:text-slate-700 duration-300" />
            ) : (
              <LuPin className="text-slate-500 w-5 h-5 hover:text-slate-700 duration-300" />
            )}
          </button>
          <button
            onClick={() => {
              setMode('edit')
              setData({ _id: _id, title: title, content: content })
              setIsOpen(!isOpen)
            }}
          >
            <MdEditNote className="text-slate-500 w-6 h-6 hover:text-slate-700 duration-300" />
          </button>
          <button
            onClick={async () => {
              setMode('delete')
              setData({ _id: _id, title: title, content: content })
              setIsOpen(!isOpen)
            }}
          >
            <TiDelete className="text-red-500 w-6 h-6 hover:text-red-700 duration-300" />
          </button>
        </div>
      </div>
      <div className="w-full p-2 h-[150px] bg-gray-100">
        <p className="text-sm">{content}</p>
      </div>
    </div>
  )
}
export default Note
