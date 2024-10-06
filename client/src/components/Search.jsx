import { CiSearch } from 'react-icons/ci'
const Search = () => {
  return (
    <div className="flex items-center gap-5 relative rounded-full max-w-[800px] overflow-hidden">
      <CiSearch className="text-[#9ca3af] w-8 h-8 absolute left-3" />
      <input
        className="text-2xl p-5 pl-16 rounded-full w-full"
        type="search"
        placeholder="Search"
      />
    </div>
  )
}
export default Search
