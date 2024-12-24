import express from 'express'
import http from 'http';
import cors from 'cors';
import route from './routes/route.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
const app = express()
const server = http.createServer(app);
app.use(express.json());
app.use(helmet());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

const PORT = process.env.PORT || 3000;
server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT} -  http://localhost:${PORT}`);
});
route(app);
export default app;