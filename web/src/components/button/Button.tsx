import { PropsWithChildren } from 'react';
import * as S from './Button.style';
export const Button = ({
	type = 'classic',
	...props
}: PropsWithChildren<{
	onClick: () => void;
	type?: 'add' | 'classic';
}>) => {
	switch (type) {
		case 'add':
			return <S.Add {...props}>+</S.Add>;
		case 'classic':
			return <S.Classic {...props} />;
	}
};
