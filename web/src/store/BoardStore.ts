import { atom } from 'recoil';
import { BoardType } from '../interfaces/Board';

export const boardDataStore = atom<BoardType>({
	key: 'BoardData',
	default: undefined,
});
