import express from "express";
import morgan from 'morgan';
import indexRoutes from './routes/index';
import path from 'path';
import cors from 'cors';

const app = express();

//settings
app.set('port', 4000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
app.use('/api', indexRoutes);

// to storage public files
app.use('/uploads', express.static(path.resolve('/uploads')));

export default app;