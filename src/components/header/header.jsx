import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogInModal from '../../components/modal/logInModal.jsx';
import { unauth } from '../../store/actions';
import './header.scss';

const pages = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'News',
		path: '/news',
	},
];
const settings = ['Logout'];

const ResponsiveAppBar = () => {
	const AuthorizationState = useSelector((store) => store.authReducer);
	const dispatch = useDispatch();

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position="static"
			style={{
				backgroundColor: '#D97236',
			}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						<Link to="/" className="header__logo-link">
							<img
								src="https://camo.githubusercontent.com/a2676d223d98caa2fb625d37d9fc911a8eab620ae99d6aadaad02fd26680ab67/68747470733a2f2f7374617469632e74696c646163646e2e636f6d2f74696c64333633382d333333382d343133362d623033382d3331333133323330363433382f47726f75705f3634302e737667"
								alt="Profilance Group"
							/>
						</Link>
					</Typography>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<Link to="/" className="header__logo-link">
							<img
								src="https://camo.githubusercontent.com/a2676d223d98caa2fb625d37d9fc911a8eab620ae99d6aadaad02fd26680ab67/68747470733a2f2f7374617469632e74696c646163646e2e636f6d2f74696c64333633382d333333382d343133362d623033382d3331333133323330363433382f47726f75705f3634302e737667"
								alt="Profilance Group"
							/>
						</Link>
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
						style={{
							gap: 100,
							justifyContent: 'center',
						}}
					>
						{pages.map((page) => (
							<Link
								key={page.name}
								onClick={handleCloseNavMenu}
								to={page.path}
								style={{
									color: '#000000',
									textDecoration: 'none',
									textTransform: 'uppercase',
								}}
							>
								{page.name}
							</Link>
						))}
					</Box>
					<div
						style={{
							display:
								AuthorizationState.isAuthorize === true
									? 'none'
									: 'block',
						}}
					>
						<LogInModal />
					</div>
					<Box
						sx={{ flexGrow: 0 }}
						style={{
							display:
								AuthorizationState.isAuthorize === true
									? 'block'
									: 'none',
						}}
					>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar
									alt={
										AuthorizationState.isAuthorize === true
											? AuthorizationState.name
											: ''
									}
									src="/static/images/avatar/2.jpg"
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) =>
								setting === 'Logout' ? (
									<MenuItem
										key={setting}
										onClick={() => {
											handleCloseUserMenu();
											dispatch(unauth());
										}}
									>
										<Typography textAlign="center">
											{setting}
										</Typography>
									</MenuItem>
								) : (
									<MenuItem
										key={setting}
										onClick={handleCloseUserMenu}
									>
										<Typography textAlign="center">
											{setting}
										</Typography>
									</MenuItem>
								)
							)}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
