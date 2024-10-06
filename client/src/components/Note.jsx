import { MdModeEditOutline } from 'react-icons/md'

const Note = () => {
  return (
    <article
      className="flex flex-col gap-3
    border w-80 h-80 rounded-3xl p-3 overflow-hidden bg-[#f5972c] hover:scale-95 duration-200"
    >
      <textarea
        className="outline-none text-lg font-semibold rounded-xl w-full h-60
        resize-none bg-transparent text-[#5a3812] p-2"
        name=""
        id=""
      ></textarea>
      <div className="flex justify-between items-center pl-5 pr-2">
        <span className="text-sm font-semibold text-gray-800">October 5, 2024</span>
        <div className="flex items-center justify-center rounded-full bg-black p-1.5">
          <MdModeEditOutline className="text-white text-xl cursor-pointer" />
        </div>
      </div>
    </article>
  )
}
export default Note
