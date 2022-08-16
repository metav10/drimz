import { DragEvent } from 'react';
import { CardType } from '../../interfaces/Board';
import * as S from './Card.style';
import { useCard } from './useCard';

export const Card = ({
	card,
	onDragStart,
	onDragEnd,
}: {
	card: CardType;
	onDragStart: () => void;
	onDragEnd: (e: DragEvent<HTMLDivElement>) => void;
}) => {
	const { content, isImportant, setContent, setIsImportant } = useCard(card);

	return (
		<S.Card
			draggable
			onDoubleClick={() => setIsImportant((isImportant) => !isImportant)}
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}>
			<S.CardContent
				suppressContentEditableWarning
				contentEditable
				onBlur={(e) => setContent(e.currentTarget.textContent)}>
				{content}
			</S.CardContent>
			{isImportant && (
				<S.Important
					onClick={() =>
						setIsImportant((isImportant) => !isImportant)
					}
				/>
			)}
		</S.Card>
	);
};
