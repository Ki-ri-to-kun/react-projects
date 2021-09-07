import {NavLink} from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = props => (
	 <header className = {styles.header}>
		<div className = "container">
			<div className = "row">
				<div className = "col col-25">
					<h1>Travel One Cruise</h1>
				</div>
				<div className = "col col-75">
					<NavLink to = "/"> Home </NavLink>
					<NavLink to = "/compare"> Compare </NavLink>
					<NavLink to = "/search"> Search </NavLink>
				</div>
			</div>
		</div>
    </header>
);


export default Header;
