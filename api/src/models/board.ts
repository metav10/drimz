import { model, Schema } from 'mongoose';
import { Board } from '../interfaces/Board';

const boardSchema: Schema = new Schema(
	{
		boardData: { type: Array, required: true },
	},
	{ timestamps: true }
);

export default model<Board>('board', boardSchema, 'board');
