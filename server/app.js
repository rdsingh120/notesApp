import express from 'express'
import 'dotenv/config'
import connectDB from './database/connectDB.js'
import Note from './models/note.models.js'
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/api/notes', async (req, res) => {
  try {
    const notes = await Note.find({ isDeleted: false })
    return res.status(200).json({
      success: true,
      data: notes,
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' })
  }
})

app.post('/api/notes', async (req, res) => {
  const noteData = req.body
  try {
    const newNote = new Note(noteData)
    await newNote.save()
    return res
      .status(201)
      .json({ success: true, message: 'new note created', data: newNote })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' })
  }
})

app.put('/api/notes/:id', async (req, res) => {
  const { id } = req.params
  const noteUpdate = req.body
  try {
    await Note.findByIdAndUpdate(id, noteUpdate)
    const updated = await Note.findById(id)
    return res
      .status(201)
      .json({ success: true, message: 'note updated', data: updated })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' })
  }
})

app.delete('/api/notes/:id', async (req, res) => {
  const { id } = req.params
  try {
    await Note.findByIdAndUpdate(id, { isDeleted: true })
    return res.status(201).json({ success: true, message: 'note deleted' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' })
  }
})

const startServer = async () => {
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`server is listening on port: ${port}...`)
    })
  } catch (error) {
    console.log(error.message)
  }
}

startServer()
