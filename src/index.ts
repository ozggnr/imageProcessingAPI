import express from 'express';
import routes from './routes/index';

const app = express();
//main route
app.use('/api', routes);

export default app;