import { Tooltip } from 'react-tooltip'
import { TiDelete } from 'react-icons/ti'
import { MdEditNote } from 'react-icons/md'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { BiDetail } from 'react-icons/bi'

import { useState } from 'react'

const Note = ({
  _id,
  title,
  content,
  createdAt,
  updatedAt,
  isOpen,
  setIsOpen,
  setMode,
  setData,
}) => {
  const [favourite, setFavourite] = useState(false)

  return (
    <div className="w-[400px] overflow-hidden">
      <Tooltip className="flex flex-col" id="my-tooltip">
        <span>
          Created: {new Date(createdAt).toLocaleDateString()}{' '}
          {new Date(createdAt).toLocaleTimeString()}
        </span>
        <span>
          Last updated: {new Date(updatedAt).toLocaleDateString()}{' '}
          {new Date(updatedAt).toLocaleTimeString()}
        </span>
      </Tooltip>
      <div className="flex justify-between items-center w-full bg-gray-300 p-2">
        <h1 className="text-lg font-medium">{title}</h1>
        <div className="flex justify-center items-center gap-1">
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
      <div className="flex justify-between w-full p-1 bg-gray-300">
        <div className="flex justify-center items-center gap-2">
          <button onClick={() => setFavourite(!favourite)}>
            {favourite ? (
              <FcLike className="w-5 h-5" />
            ) : (
              <FcLikePlaceholder className="w-5 h-5" />
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
        </div>
        <button data-tooltip-id="my-tooltip" data-tooltip-place="bottom">
          <BiDetail className="text-slate-500 w-6 h-6 hover:text-slate-700 duration-300" />
        </button>
      </div>
    </div>
  )
}
export default Note
