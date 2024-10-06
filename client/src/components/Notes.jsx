import Note from './Note'

const Notes = ({notes}) => {
  return (
    <div className="my-16">
      <h1 className="text-5xl max-sm:text-center font-semibold mb-10">Notes</h1>
      <div className="flex flex-wrap gap-6 max-sm:justify-center sm:items-center">
        {notes}
      </div>
    </div>
  )
}
export default Notes
