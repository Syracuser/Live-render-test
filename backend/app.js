import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

// Enable CORS for all origins (frontend can be anywhere)
app.use(cors())

// Parse JSON bodies (for POST requests)
app.use(express.json())

// Example API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from backend!' })
})

// Example POST endpoint
app.post('/api/data', (req, res) => {
    console.log('Received data:', req.body)
    res.json({ status: 'success', received: req.body })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
