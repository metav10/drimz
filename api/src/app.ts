import cors from 'cors';
import express, { Express } from 'express';
import boardRoutes from './routes/boardRoutes';

const app: Express = express();

const PORT = 8080;

app.use(cors());
app.use(boardRoutes);

app.listen(PORT, () => {
	try {
		return console.log(`Server is running on port - ${PORT}`);
	} catch (err) {
		return console.error(err);
	}
});
