import { PropsWithChildren } from 'react';
import * as S from './Button.style';
export const Button = ({
	type = 'classic',
	...props
}: PropsWithChildren<{
	onClick: () => void;
	type?: 'add' | 'classic' |'remove';
}>) => {
	switch (type) {
		case 'add':
			return <S.Add {...props}>+</S.Add>;
		case 'remove':
			return <S.Remove {...props}>-</S.Remove>;
		case 'classic':
			return <S.Classic {...props} />;
	}
};
