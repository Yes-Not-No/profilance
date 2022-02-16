import { Container } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { FullWidthTextField } from '../../components/fullWidthSearchInput/fullWidthTextField';
import NewsItem from '../../components/news/newsItem';
import { setNewsList } from '../../store/actions';
import './news.scss';

export default function News() {
	const authorizationState = useSelector((state) => state.authReducer);
	const newsState = useSelector((state) => state.newsReducer);
	const filteredList = useSelector((state) => state.filteredNewsReducer);
	const dispatch = useDispatch();

	function addNewsButtonHandler() {
		const title = document.querySelector('#add-news-title');
		const description = document.querySelector('#add-news-description');
		const date = new Date();
		const newItem = {
			id: newsState.length,
			title: title.value.toUpperCase(),
			content: description.value,
			date: date.toLocaleDateString(),
		};

		if (title.value !== '' && description.value !== '') {
			dispatch(setNewsList(newItem));
			localStorage.setItem('newslist', JSON.stringify(newsState));
		}

		title.value = '';
		description.value = '';
	}

	function closeNewsButtonHandler() {
		document.querySelector('.news-add').classList.remove('news-add-shown');
	}

	function newsListRender() {
		let items;

		if (
			document.querySelector('#fullWidth') === null ||
			document.querySelector('#fullWidth').value === ''
		) {
			items = newsState.map((item) => {
				return (
					<NewsItem
						key={item.title}
						title={item.title}
						text={item.content}
					/>
				);
			});
		} else {
			items = filteredList.map((item) => {
				return (
					<NewsItem
						key={item.title}
						title={item.title}
						text={item.content}
					/>
				);
			});
		}

		return items;
	}

	return (
		<Container
			className="content-container news-content-container"
			maxWidth="lg"
			style={{
				display: 'flex',
				alignItems: 'center',
				padding: '30px',
				flexDirection: 'column',
			}}
		>
			<FullWidthTextField />
			<div className="new-content__news-list">{newsListRender()}</div>
			<div className="news-add">
				<label htmlFor="add-news-title">
					Заголовок
					<input type="text" id="add-news-title" />
				</label>
				<label htmlFor="add-news-title">
					Описание
					<textarea type="text" rows="20" id="add-news-description" />
				</label>

				<ButtonGroup disableElevation variant="contained">
					<Button onClick={closeNewsButtonHandler}>Закрыть</Button>
					<Button onClick={addNewsButtonHandler}>Добавить</Button>
				</ButtonGroup>
			</div>
			<Button
				variant="contained"
				style={{
					marginTop: 50,
					display:
						authorizationState.isAuthorize === true
							? 'block'
							: 'none',
				}}
				onClick={() => {
					document
						.querySelector('.news-add')
						.classList.add('news-add-shown');
				}}
			>
				Добавить новость
			</Button>
		</Container>
	);
}
