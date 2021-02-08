import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import playerRouter from './routers/playerRouter.js'

dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/auction', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// app.get('/api/players', (req,res) => {
//     res.send(data.players);
// });

// app.get('/api/players/:id', (req, res) => {

//     const player = data.players.find((x) => x._id == req.params.id);

//     if (player) {
//         res.send(player);
//     } else {
//         res.status(404).send({ message: 'player Not Found' });
//     }
// });

app.use('/api/users', userRouter);
app.use('/api/players', playerRouter);

app.get('/', (req,res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})