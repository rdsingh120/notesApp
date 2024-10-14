import { useEffect } from 'react'
import useStore from '../store/useStore'
import Modal from '../components/Modal'
import Notes from '../components/Notes'

const Home = ({ isOpen, setIsOpen, mode, setMode, setData, data }) => {
  const { notes, fetchNotes } = useStore()
  useEffect(() => {
    fetchNotes()
  }, [])
  return (
    <div className="">
      <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-sky-900" />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} mode={mode} data={data} />
      <Notes
        notes={notes}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setMode={setMode}
        setData={setData}
      />
    </div>
  )
}
export default Home
