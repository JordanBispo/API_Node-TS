////////////////////////////////////
//              SETUP             //
////////////////////////////////////
import { errors, celebrate, Joi } from 'celebrate';
import Routes from './routes/index';
import httpServer from 'http';
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config();

const app = express();
const http = httpServer.createServer(app);
const PORT = process.env.HTTP_PORT || 8080

http.listen(PORT);
app.disable('x-powered-by');
app.use(cors());
app.use(celebrate({
	headers: Joi.object({
		authentication: Joi.string()
	}).unknown()
}));
app.use(errors());

app.use(Routes);

console.log(`Server started in: http://127.0.0.1:${PORT}`);
