import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { debounce } from 'lodash';
import { fetchBoard, updateBoard } from '../../api/board';
import { Board } from '../../components/board/Board';
import { boardDataStore } from '../../store/BoardStore';
import * as S from './BoardPage.style';

export const BoardPage = () => {
	const [boardData, setBoardData] = useRecoilState(boardDataStore);

	const updateBoardToServer = debounce(() => {
		updateBoard(boardData);
	}, 1000);

	useEffect(() => {
		fetchBoard().then((res) => {
			if (!res) return;
			setBoardData(res.boardData);
		});
	}, [setBoardData]);

	return (
		<S.BoardWrapper>
			{boardData ? (
				<Board updateBoardToServer={updateBoardToServer} />
			) : (
				'loading'
			)}
		</S.BoardWrapper>
	);
};
