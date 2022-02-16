import { Container } from '@mui/material';
import LogInModal from '../../components/modal/logInModal.jsx';
import './home.scss';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { unauth } from '../../store/actions/index.js';

export default function Home() {
	const authorizationState = useSelector((state) => state.authReducer);
	const dispatch = useDispatch();

	const dispatchUserState = () => {
		dispatch(unauth());
		localStorage.setItem('user', JSON.stringify({ isAuthorize: false }));
	};

	const unregisteredUser = (
		<div className="home__content-wrapper">
			<span>Привет, гость!</span>
			<LogInModal />
		</div>
	);

	const registeredUser = (
		<div className="home__content-wrapper">
			Привет,{' '}
			{authorizationState.isAuthorize === true
				? authorizationState.name
				: ''}
			!
			<Button
				variant="contained"
				style={{
					width: 'max-content',
					backgroundColor: '#F2AE2E',
				}}
				onClick={dispatchUserState}
			>
				Выйти
			</Button>
		</div>
	);

	return (
		<Container maxWidth="lg">
			{authorizationState.isAuthorize === true
				? registeredUser
				: unregisteredUser}
		</Container>
	);
}
