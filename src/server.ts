import app from './index';
//port is carried here to prevent test from listening the same port
const port = 5000;
app.listen(port, () => console.log(`Listening port ${port}`));
