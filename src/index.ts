import express from 'express'
const app = express()
const port = 5000

app.get('/api', (req, res) => {
    res.send('Hello!')
})
app.listen(port, () => {
    console.log(`Listening port ${port}`)
})