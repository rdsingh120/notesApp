import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState('')
  const [data, setData] = useState({ _id: '', title: '', content: '' })

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setMode={setMode} />
      <Toaster position="bottom-center" reverseOrder={true} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              notes={notes}
              setNotes={setNotes}
              mode={mode}
              setMode={setMode}
              data={data}
              setData={setData}
            />
          }
        />
      </Routes>
    </div>
  )
}
export default App
