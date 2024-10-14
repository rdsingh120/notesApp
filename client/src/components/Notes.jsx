import Note from './Note'

const Notes = ({ notes, isOpen, setIsOpen, setMode, setData }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 p-5 mx-auto max-w-[1450px]">
      {notes?.slice(0)?.reverse()?.map((note) => (
        <Note
          key={note?._id}
          {...note}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setMode={setMode}
          setData={setData}
        />
      ))}
    </div>
  )
}
export default Notes
