import Notes from './components/Notes'
import Search from './components/Search'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className="h-[120vh]">
      <Sidebar />
      <div className="sm:ml-[140px] flex flex-col px-16 pt-10 max-sm:pt-28">
        <Search />
        <Notes />
      </div>
    </div>
  )
}
export default App
