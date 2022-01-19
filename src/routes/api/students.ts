import express from 'express';
const students = express.Router();

students.get('/', (req, res) => {
    res.send('students router!');
})

export default students;