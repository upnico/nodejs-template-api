import express from 'express';
import { PORT } from '../config/config.json';
import userRouter from './user/user.router'

const app = express();
app.use(express.json());


app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});