import mongoose from 'mongoose';
import cors from 'cors';
import express, { Express } from 'express';
import boardRoutes from './routes/boardRoutes';

const app: Express = express();

const PORT = 8080;
const MONGO_USER = 'admin';
const MONGO_PASSWORD = 'C76L6dxlHIqgIY6m';
const MONGO_DB_NAME = 'board';

app.use(cors());
app.use(boardRoutes);

const uri: string = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.2emgu7y.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { autoIndex: true }).then(() => {
	app.listen(PORT, () => {
		try {
			return console.log(`Server is running on port - ${PORT}`);
		} catch (err) {
			return console.error(err);
		}
	});
});

module.exports = app;
