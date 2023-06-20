import express from 'express';
import authsRouter from './router/auths.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();


// middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173'
}
));

app.use('/api/auths', authsRouter);


// app.get('/', (req, res) => {
//     res.json('njimoke');
// });

app.listen(8080, () => {
    console.log('Backend server is working!');
});


