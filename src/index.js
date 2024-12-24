import express from 'express'
import http from 'http';
import cors from 'cors';
import route from './routes/route.js';
const app = express()
const server = http.createServer(app);
app.use(express.json());
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