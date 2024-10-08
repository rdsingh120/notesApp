import { useState } from 'react'
import Notes from './components/Notes'
import Search from './components/Search'
import Sidebar from './components/Sidebar'

const App = () => {
  const [notes, setNotes] = useState([])
  return (
    <div className="">
      <Sidebar notes={notes} setNotes={setNotes} />
      <div className="sm:ml-[140px] flex flex-col px-16 pt-10 max-sm:pt-28">
        <Search />
        <Notes notes={notes} />
      </div>
    </div>
  )
}
export default App
