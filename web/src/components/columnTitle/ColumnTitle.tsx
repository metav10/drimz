import { useColumnTitle } from './useColumnTitle';
import * as S from './ColumnTitle.style';

export const ColumnTitle = ({
	title,
	index,
}: {
	title: string | null;
	index: number;
}) => {
	const { content, setContent } = useColumnTitle(title, index);

	return (
		<S.Title
			suppressContentEditableWarning
			contentEditable
			onBlur={(e) => setContent(e.currentTarget.textContent)}>
			{content}
		</S.Title>
	);
};
