import env from '.env.js';
import express from 'express';
import apiRoutes from './routers/api.js';
import cors from 'cors';




const app = express();
const PORT = env.SERVER_PORT || 3000;


app.use(cors({
    origin: '*', // Дозволяємо усе
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Якщо потрібен доступ до сесійних даних
}));


app.use(express.json());


// Використовуємо маршрути API
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
