import { atom } from 'recoil';
import { BOARD_DATA } from '../constant/board';
import { BoardType } from '../interfaces/Board';

export const boardDataStore = atom<BoardType>({
	key: 'BoardData',
	default: BOARD_DATA,
});
