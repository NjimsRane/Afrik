import express from 'express';
import authsRouter from './router/auths.js';


const app = express();


// middleware
app.use(express.json());

app.use('/api/auths', authsRouter);


// app.get('/', (req, res) => {
//     res.json('njimoke');
// });

app.listen(8080, () => {
    console.log('Backend server is working!');
});


