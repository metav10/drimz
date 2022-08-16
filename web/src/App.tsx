import { GlobalStyle } from './style/GlobalStyle';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import { BoardPage } from './pages/board/BoardPage';

const App = () => (
	<HelmetProvider>
		<RecoilRoot>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<GlobalStyle />
			<BoardPage />
		</RecoilRoot>
	</HelmetProvider>
);

export default App;
