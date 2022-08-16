import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { boardDataStore } from '../../store/BoardStore';
import { useDragDrop } from './hooks/useDragDrop';
import { Button } from '../button/Button';
import { Cards } from './components/Cards';
import * as S from './Board.style';
import { ColumnTitle } from '../columnTitle/ColumnTitle';
import { CardType } from '../../interfaces/Board';

export const Board = ({
	updateBoardToServer,
}: {
	updateBoardToServer: () => void;
}) => {
	const [boardData, setBoardData] = useRecoilState(boardDataStore);
	const { ...dragEvents } = useDragDrop(boardData, setBoardData);

	const addCard = (index: number) => {
		const tempBoardData = [...boardData];
		let tempCards: Array<CardType> = [
			{
				content: null,
				id: uuidv4(),
			},
			...tempBoardData[index].cards,
		];
		tempBoardData[index] = {
			...tempBoardData[index],
			cards: tempCards,
		};
		setBoardData(tempBoardData);
	};

	useEffect(() => {
		updateBoardToServer();
	}, [boardData]);

	return (
		<S.BoardContent>
			{boardData.map((column, cIndex) => (
				<S.Column key={cIndex}>
					<S.Header>
						<ColumnTitle title={column.title} index={cIndex} />
						<Button type="add" onClick={() => addCard(cIndex)} />
					</S.Header>
					<Cards
						cards={column.cards}
						key={cIndex}
						columnIndex={cIndex}
						{...dragEvents}
					/>
				</S.Column>
			))}
		</S.BoardContent>
	);
};
