import { Board, BoardType } from '../../interfaces/Board';
import board from '../../models/board';

export const fetchBoardData = async (id: string) =>
	(await board.findOne({ _id: id })) as Board;

export const updateBoardData = async (
	id: string,
	updatedBoardData: BoardType
) =>
	(await board.findOneAndUpdate(
		{ _id: id },
		{ boardData: updatedBoardData }
	)) as Board;
