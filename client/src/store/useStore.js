import axios from 'axios'
import { create } from 'zustand'
const useStore = create((set) => ({
  notes: [],
  setNotes: (notes) => set({ notes }),
  fetchNotes: async () => {
    const { data } = await axios('api/notes')
    set({ notes: data?.data })
  },
  createNote: async (newNote) => {
    const { title, content } = newNote
    if (!title || !content) {
      return { success: false, message: 'Please complete all the fields' }
    }
    const { data } = await axios.post('/api/notes', newNote)
    set((state) => ({ notes: [...state.notes, data?.data] }))
    return { success: data?.success, message: data?.message }
  },
  editNote: async (id, update) => {
    const { data } = await axios.put(`/api/notes/${id}`, update)

    set((state) => ({
      notes: state.notes.map((note) => (note._id == id ? data?.data : note)),
    }))
    return { success: data?.success, message: data?.message }
  },
  deleteNote: async (id) => {
    const { data } = await axios.delete(`/api/notes/${id}`)
    set((state) => ({
      notes: state.notes.filter(({ _id }) => _id != id),
    }))
    return { success: data?.success, message: data?.message }
  },
}))

export default useStore
