import express from 'express';
import routes from './routes/index';

const app = express();
const port = 5000;
//main route
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Listening port ${port}`);
})