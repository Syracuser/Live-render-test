import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

// Enable CORS for all routes
app.use(cors({
    origin: ['http://localhost:5500', 'https://your-frontend-domain.com'],
    credentials: true
}))

// Parse JSON bodies
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is my app! nice, right?')
})

// Example API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!', timestamp: new Date() })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})