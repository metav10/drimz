import { DragEvent } from 'react';
import { CardType } from '../../../interfaces/Board';
import { Card } from '../../card/Card';
import * as S from '../Board.style';

export const Cards = ({
	cards,
    columnIndex,
	onDragStart,
	onDragEnd,
	onDragOverColumn,
}: {
	cards: Array<CardType>;
    columnIndex: number;
	onDragStart: (id: string, cardIndex: number, columnIndex: number) => void;
	onDragEnd: () => void;
	onDragOverColumn: (e: DragEvent<HTMLDivElement>) => void;
}) => {
	return (
		<S.Cards onDragOver={onDragOverColumn}>
			{cards.map((card, cardIndex) => (
				<Card
					onDragStart={() => onDragStart(card.id, cardIndex, columnIndex)}
					onDragEnd={onDragEnd}
					key={card.id}
					card={card}
				/>
			))}
		</S.Cards>
	);
};
